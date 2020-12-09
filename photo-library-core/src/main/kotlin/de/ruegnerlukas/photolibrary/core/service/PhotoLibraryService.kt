package de.ruegnerlukas.photolibrary.core.service

import de.ruegnerlukas.photolibrary.core.model.Entities
import de.ruegnerlukas.photolibrary.core.persistence.DataAccess
import java.awt.image.BufferedImage
import java.io.ByteArrayOutputStream
import java.io.File
import javax.enterprise.context.ApplicationScoped
import javax.imageio.ImageIO

@ApplicationScoped
class PhotoLibraryService(private val dataAccess: DataAccess) {

	val thumbnailWidth = 200


	fun importDirectory(dirPath: String): Int {
		return File(dirPath).walk()
			.filter { file -> file.extension == "jpeg" || file.extension == "jpg" }
			.map { file -> importFile(file) }
			.count()
	}

	fun importFiles(data: Entities.ImportFilesRest): Int {
		return data.paths
			.map { path -> File(path) }
			.filter { file -> file.extension == "jpeg" || file.extension == "jpg" }
			.map { file -> importFile(file) }
			.count()
	}


	fun importFile(file: File) {
		val image = ImageIO.read(file)
		val thumbnail = toThumbnail(image, thumbnailWidth)
		importImage(thumbnail, file.nameWithoutExtension, file.extension)
	}


	fun getAllImages(): List<Entities.ImageEntity> {
		return dataAccess.getAllImages()
	}


	private fun importImage(thumbnail: BufferedImage, name: String, type: String) {
		val imageBytes = toByteArray(thumbnail, type)
		dataAccess.insertImage(imageBytes, name, type)
	}


	private fun toByteArray(image: BufferedImage, format: String): ByteArray {
		val byteStream = ByteArrayOutputStream()
		ImageIO.write(image, format, byteStream)
		return byteStream.toByteArray()
	}


	private fun toThumbnail(image: BufferedImage, width: Int): BufferedImage {
		val thumbnailHeight = (image.height * (width.toDouble() / image.width)).toInt()
		val thumbnail = BufferedImage(width, thumbnailHeight, BufferedImage.TYPE_INT_RGB)

		val graphics = thumbnail.createGraphics()
		graphics.drawImage(image, 0, 0, width, thumbnailHeight, null)
		graphics.dispose()

		return thumbnail
	}


}