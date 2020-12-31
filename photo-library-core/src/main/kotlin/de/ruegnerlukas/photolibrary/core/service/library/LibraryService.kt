package de.ruegnerlukas.photolibrary.core.service.library

import de.ruegnerlukas.photolibrary.core.persistence.LibraryDataAccess
import java.io.File
import javax.enterprise.context.ApplicationScoped

@ApplicationScoped
class LibraryService(val libraryDataAccess: LibraryDataAccess) {

    fun create(path: String, name: String) {
        val dbName = toValidDBName(name)
        val validationErrors = validate(path, name, dbName)
        if (validationErrors.isNotEmpty()) {
			throw InvalidLibraryDataException(validationErrors)
        } else {
            libraryDataAccess.createLibrary(path, dbName)
        }
    }

    fun toValidDBName(name: String): String {
        return name.replace(" ", "_")
    }

    private fun validate(path: String, name: String, dbName: String): List<String> {
        val errors = mutableListOf<String>()
		val targetDir = File(path)
        if (name.isBlank()) {
            errors.add("The name of the library can not be empty.")
        }
        if (!targetDir.exists()) {
            errors.add("The target directory does not exist.")
        }
        if (targetDir.exists() && !targetDir.isDirectory) {
            errors.add("The path does not point to a valid directory. ")
        }
        if(targetDir.exists() && !targetDir.canWrite()) {
            errors.add("Can not write to target directory.")
        }
        if(targetDir.exists() && File(targetDir, "$dbName.mv.db").exists()) {
            errors.add("A file with the same name already exists.")
        }
        return errors
    }

//	fun openProject(path: String) {
//		projectDataAccess.openProjectFile(path)
//	}
//
//	fun getProjectMeta(): ProjectMeta {
//		return projectDataAccess.getProjectMeta()
//	}

}