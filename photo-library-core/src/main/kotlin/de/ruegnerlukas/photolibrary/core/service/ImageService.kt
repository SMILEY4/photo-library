package de.ruegnerlukas.photolibrary.core.service

import de.ruegnerlukas.photolibrary.core.model.ImageData
import de.ruegnerlukas.photolibrary.core.persistence.ImageDataAccess
import org.w3c.dom.NamedNodeMap
import org.w3c.dom.Node
import java.awt.image.BufferedImage
import java.io.ByteArrayOutputStream
import java.io.File
import javax.enterprise.context.ApplicationScoped
import javax.imageio.ImageIO

@ApplicationScoped
class ImageService(val imageDataAccess: ImageDataAccess) {

	data class ImageMetadata(
		val path: String
	)


	fun getImages(): List<ImageData> {
		return imageDataAccess.getImages()
	}


	fun importImages(paths: Array<String>) {
		paths.forEach { path -> importImage(path) }
	}


	fun importImage(path: String) {
		val file = File(path)
		val image = ImageData(
			thumbnail = toByteArray(toThumbnail(ImageIO.read(file), 200), file.extension),
			path = file.absolutePath,
			name = file.name,
			type = file.extension
		)
		imageDataAccess.insertImage(image)
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


	fun readMetadata(path: String): ImageMetadata {
		val file = File(path)
		val imageInputSteam = ImageIO.createImageInputStream(file)
		val readers = ImageIO.getImageReaders(imageInputSteam)

		if (readers.hasNext()) {
			val reader = readers.next()
			reader.setInput(imageInputSteam, true)
			val metadata = reader.getImageMetadata(0)
			val names = metadata.metadataFormatNames
			for (name in names) {
				iterateMetadataTree(metadata.getAsTree(name), "", true)
			}
		}

		return ImageMetadata(path)
	}


	private fun iterateMetadataTree(node: Node, currentPath: String, isRoot: Boolean) {
		val nodePath = if (isRoot) "" else if (currentPath.isEmpty()) node.nodeName else "$currentPath.${node.nodeName}"

		val attributes: NamedNodeMap? = node.attributes
		if (attributes != null) {
			for (i in 0 until attributes.length) {
				val attribute = attributes.item(i)
				println("$nodePath.${attribute.nodeName} = ${attribute.nodeValue}")
			}
		}

		val children = node.childNodes
		if (children != null) {
			for (i in 0 until children.length) {
				val child = children.item(i)
				iterateMetadataTree(child, nodePath, false)
			}
		}

	}

}