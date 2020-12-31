package de.ruegnerlukas.photolibrary.core.persistence

data class DbAccessInfo(
    val noConnection: Boolean = true,
    val url: String = ""
)