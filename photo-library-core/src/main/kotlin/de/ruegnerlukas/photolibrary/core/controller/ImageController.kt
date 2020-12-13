package de.ruegnerlukas.photolibrary.core.controller

import de.ruegnerlukas.photolibrary.core.common.Json
import de.ruegnerlukas.photolibrary.core.service.ImageService
import org.jboss.logging.Logger
import javax.ws.rs.*
import javax.ws.rs.core.MediaType
import javax.ws.rs.core.Response

@Path("${ControllerConstants.PHOTO_LIB_BASE_URI}/api")
class ImageController(val imageService: ImageService) {

	private val log: Logger = Logger.getLogger(ProjectController::class.java)


	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("image/import")
	fun importImages(imagePaths: Array<String>): Response {
		log.info("BEFORE REQUEST: Import images '${Json.pretty(imagePaths)}'.")
		imageService.importImages(imagePaths)
		return Response
			.accepted()
			.header("Access-Control-Allow-Origin", "*")
			.build()
	}


	@GET
	@Path("image")
	@Produces(MediaType.APPLICATION_JSON)
	fun getImages(): Response {
		log.info("BEFORE REQUEST: Get images.")
		return Response
			.ok(imageService.getImages())
			.header("Access-Control-Allow-Origin", "*")
			.build()
	}


}