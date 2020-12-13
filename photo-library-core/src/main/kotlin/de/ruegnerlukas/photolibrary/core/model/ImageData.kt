package de.ruegnerlukas.photolibrary.core.model

data class ImageData(
	val thumbnail: ByteArray,
	val path: String,
	val name: String,
	val type: String
)
