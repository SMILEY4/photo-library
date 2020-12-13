package de.ruegnerlukas.photolibrary.core.service

import de.ruegnerlukas.photolibrary.core.model.ProjectMeta
import de.ruegnerlukas.photolibrary.core.persistence.ProjectDataAccess
import javax.enterprise.context.ApplicationScoped

@ApplicationScoped
class ProjectService(val projectDataAccess: ProjectDataAccess) {

	fun openProject(path: String) {
		projectDataAccess.openProjectFile(path)
	}

	fun createProject(path: String, name: String) {
		projectDataAccess.initializeProject(path, name)
	}

	fun getProjectMeta(): ProjectMeta {
		return projectDataAccess.getProjectMeta()
	}

}