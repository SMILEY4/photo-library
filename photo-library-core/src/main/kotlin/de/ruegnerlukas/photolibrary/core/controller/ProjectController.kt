package de.ruegnerlukas.photolibrary.core.controller

import de.ruegnerlukas.photolibrary.core.model.ProjectMeta
import de.ruegnerlukas.photolibrary.core.service.ProjectService
import org.jboss.logging.Logger
import javax.ws.rs.*
import javax.ws.rs.core.Response


@Path("${ControllerConstants.PHOTO_LIB_BASE_URI}/api")
class ProjectController(val projectService: ProjectService) {

	private val log: Logger = Logger.getLogger(ProjectController::class.java)


	@POST
	@Path("project")
	fun createProject(@QueryParam("path") path: String, @QueryParam("name") name: String): Response {
		log.info("BEFORE REQUEST: Create project at '$path' with name '$name'.")
		projectService.createProject(path, name)
		return Response.status(Response.Status.OK).build();
	}


	@PUT
	@Path("project")
	fun openProject(@QueryParam("path") path: String): Response {
		log.info("BEFORE REQUEST: Load project from '$path'.")
		projectService.openProject(path)
		return Response.status(Response.Status.OK).build();
	}


	@GET
	@Path("project")
	fun getProjectInformation(): ProjectMeta {
		log.info("BEFORE REQUEST: Get project info.")
		return projectService.getProjectMeta()
	}


}