package de.ruegnerlukas.photolibrary.core.persistence

import de.ruegnerlukas.photolibrary.core.model.ProjectMeta
import java.sql.ResultSet
import javax.enterprise.context.ApplicationScoped

@ApplicationScoped
class LibraryDataAccess(val dataAccess: DataAccess) {

	fun createLibrary(path: String, name: String) {
		dataAccess.openDatabaseFile("$path/$name")

		dataAccess.createTable(
			"project_meta",
			listOf(
				"key VARCHAR PRIMARY KEY",
				"value VARCHAR"
			)
		)
		dataAccess.insert("INSERT INTO project_meta VALUES ('name', '$name')")
		dataAccess.insert("INSERT INTO project_meta VALUES ('created', '${System.currentTimeMillis()}')")
	}

	fun openProjectFile(path: String) {
		dataAccess.openDatabaseFile(path)
	}

	fun getProjectMeta(): ProjectMeta {
		var projectName = "?"
		var created = 0L
		dataAccess.query("SELECT * FROM project_meta WHERE key = 'name'") { resultSet: ResultSet ->
			resultSet.next()
			projectName = resultSet.getString("value")
		}
		dataAccess.query("SELECT * FROM project_meta WHERE key = 'created'") { resultSet: ResultSet ->
			resultSet.next()
			created = resultSet.getString("value").toLong()
		}
		return ProjectMeta(projectName, created)
	}

}