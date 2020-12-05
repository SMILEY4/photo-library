package de.ruegnerlukas.photolibrary.core.persistence

import de.ruegnerlukas.photolibrary.core.model.Entities
import io.agroal.api.AgroalDataSource
import io.quarkus.runtime.ShutdownEvent
import io.quarkus.runtime.StartupEvent
import javax.enterprise.context.ApplicationScoped
import javax.enterprise.event.Observes


@ApplicationScoped
class DataAccess(private val dataSource: AgroalDataSource) {

	fun onStart(@Observes event: StartupEvent) {
		val sql = "CREATE TABLE images (id IDENTITY PRIMARY KEY, filename VARCHAR, filetype VARCHAR, thumbnail BINARY)"
		dataSource.connection.use { connection -> connection.createStatement().use { stmt -> stmt.execute(sql) } }
	}


	fun onStop(@Observes event: ShutdownEvent) {
	}


	fun insertImage(image: ByteArray, filename: String, filetype: String) {
		val sql = "INSERT INTO images (filename, filetype, thumbnail) VALUES ('$filename', '$filetype', ?)"
		dataSource.connection.use { connection ->
			connection.prepareStatement(sql).use { stmt ->
				stmt.setBytes(1, image)
				stmt.execute()
			}
		}
	}


	fun getAllImages(): List<Entities.ImageEntity> {
		val sql = "SELECT * FROM images"
		val entityList = mutableListOf<Entities.ImageEntity>()
		dataSource.connection.use { connection ->
			connection.createStatement().use { stmt ->
				val result = stmt.executeQuery(sql)
				while (result.next()) {
					entityList.add(
						Entities.ImageEntity(
							result.getString("filename"),
							result.getString("filetype"),
							result.getBytes("thumbnail")
						)
					)
				}
			}

		}
		return entityList
	}


}