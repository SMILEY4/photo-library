package de.ruegnerlukas.photolibrary.core.persistence

import de.ruegnerlukas.photolibrary.core.model.ProjectMeta
import java.sql.ResultSet
import javax.enterprise.context.ApplicationScoped

@ApplicationScoped
class ProjectDataAccess(val dataAccess: DataAccess) {

	fun openProjectFile(path: String) {
		dataAccess.openDatabaseFile(path)
	}


	fun initializeProject(path: String, name: String) {
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

		dataAccess.createTable(
			"images",
			listOf(
				"id IDENTITY PRIMARY KEY",
				"path VARCHAR",
				"name VARCHAR",
				"type VARCHAR",
				"thumbnail BINARY"
			)
		)

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