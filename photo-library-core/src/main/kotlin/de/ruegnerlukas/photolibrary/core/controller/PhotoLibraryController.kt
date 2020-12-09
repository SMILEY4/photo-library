package de.ruegnerlukas.photolibrary.core.controller

import com.fasterxml.jackson.databind.ObjectMapper
import de.ruegnerlukas.photolibrary.core.model.Entities
import de.ruegnerlukas.photolibrary.core.service.PhotoLibraryService
import javax.ws.rs.*
import javax.ws.rs.core.MediaType
import javax.ws.rs.core.Response

@Path("/photolibrary/api")
class PhotoLibraryController(private val service: PhotoLibraryService) {


	@POST
	@Path("images/import/directory")
	fun importDirectory(@QueryParam("dir") dirPath: String): Response {
        println("REQUEST importDirectory: $dirPath")
        service.importDirectory(dirPath)
		return Response.accepted().header("Access-Control-Allow-Origin", "*").build()
	}


	@POST
	@Path("images/import/files")
	fun importFiles(importData: Entities.ImportFilesRest): Response {
        println("REQUEST importFiles: ${ObjectMapper().writeValueAsString(importData)}")
        service.importFiles(importData)
		return Response.accepted().header("Access-Control-Allow-Origin", "*").build()
	}


	@GET
	@Path("images")
	@Produces(MediaType.APPLICATION_JSON)
	fun getAllImages(): Response {
        println("REQUEST getAllImages")
        val images = service.getAllImages()
		return Response.ok(images).header("Access-Control-Allow-Origin", "*").build()
	}


}