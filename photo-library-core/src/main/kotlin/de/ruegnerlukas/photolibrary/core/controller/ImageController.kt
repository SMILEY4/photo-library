package de.ruegnerlukas.photolibrary.core.controller

import de.ruegnerlukas.photolibrary.core.common.Json
import de.ruegnerlukas.photolibrary.core.model.ImageData
import de.ruegnerlukas.photolibrary.core.service.ImageService
import org.jboss.logging.Logger
import javax.ws.rs.GET
import javax.ws.rs.POST
import javax.ws.rs.Path
import javax.ws.rs.core.Response

@Path("${ControllerConstants.PHOTO_LIB_BASE_URI}/api")
class ImageController(val imageService: ImageService) {

	private val log: Logger = Logger.getLogger(ProjectController::class.java)


	@POST
	@Path("image")
	fun importImages(imagePaths: Array<String>): Response {
		log.info("BEFORE REQUEST: Import images '${Json.pretty(imagePaths)}'.")
		imageService.importImages(imagePaths)
		return Response.accepted().build()
	}


	@GET
	@Path("image")
	fun getImages(): List<ImageData> {
		log.info("BEFORE REQUEST: Get images.")
		return imageService.getImages()
	}


}