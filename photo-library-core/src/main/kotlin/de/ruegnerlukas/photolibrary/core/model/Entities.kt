package de.ruegnerlukas.photolibrary.core.model

class Entities {

	data class ImportFilesRest(var paths: Array<String> = arrayOf())

	data class ImageEntity(val name: String, val type: String, val thumbnail: ByteArray)

}
