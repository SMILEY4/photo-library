package de.ruegnerlukas.photolibrary.core.persistence

import de.ruegnerlukas.photolibrary.core.model.ImageData
import javax.enterprise.context.ApplicationScoped

@ApplicationScoped
class ImageDataAccess(val dataAccess: DataAccess) {

	fun insertImage(image: ImageData) {
		println("insert image ${image.path}")
		dataAccess.insert(
			"INSERT INTO images (path, name, type, thumbnail) VALUES ('${image.path}', '${image.name}', '${image.type}', ?)",
			image.thumbnail
		)
	}

	fun getImages(): List<ImageData> {
		val images = mutableListOf<ImageData>()
		dataAccess.query("SELECT * FROM images") { resultSet ->
			while (resultSet.next()) {
				images.add(
					ImageData(
						path = resultSet.getString("path"),
						name = resultSet.getString("name"),
						type = resultSet.getString("type"),
						thumbnail = resultSet.getBytes("thumbnail")
					)
				)
			}
		}
		return images
	}

}