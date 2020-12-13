package de.ruegnerlukas.photolibrary.core.persistence

import org.eclipse.microprofile.config.inject.ConfigProperty
import java.sql.DriverManager
import java.sql.ResultSet
import javax.enterprise.context.ApplicationScoped

@ApplicationScoped
class DataAccess {

	data class DbAccessInfo(
		val noConnection: Boolean = true,
		val url: String = ""
	)


	@ConfigProperty(name = "photo-library.db.force-in-memory")
	var forceInMemory: Boolean = false

	var dbAccessInfo = DbAccessInfo(true)


	fun openDatabaseFile(path: String) {
		val url = if (forceInMemory) "jdbc:h2:mem:PhotoLibDB;DB_CLOSE_DELAY=-1" else "jdbc:h2:file:$path"
		dbAccessInfo = DbAccessInfo(false, url)
	}


	fun createTable(tableName: String, columns: List<String>) {
		val sql = "CREATE TABLE $tableName (${columns.joinToString(", ")})"
		DriverManager.getConnection(dbAccessInfo.url).use { connection ->
			connection.createStatement().use { statement ->
				statement.execute(sql)
			}
		}
	}


	fun insert(sql: String, vararg args: Any) {
		DriverManager.getConnection(dbAccessInfo.url).use { connection ->
			if (args.isEmpty()) {
				connection.createStatement().use { statement ->
					statement.executeUpdate(sql)
					connection.commit()
				}
			} else {
				connection.prepareStatement(sql).use { stmt ->
					args.forEachIndexed { index, arg ->
						when (arg) {
							is ByteArray -> stmt.setBytes(index+1, arg as ByteArray?)
							else -> println("Unknown data type: '$arg' at i=$index+1")
						}
					}
					stmt.execute()
				}
			}
		}
	}


	fun query(sql: String, consumer: (ResultSet) -> Unit) {
		DriverManager.getConnection(dbAccessInfo.url).use { connection ->
			connection.createStatement().use { statement ->
				consumer(statement.executeQuery(sql))
			}
		}
	}

}