package de.ruegnerlukas.photolibrary.core.controller

import de.ruegnerlukas.photolibrary.core.service.PhotoLibraryService
import javax.ws.rs.*
import javax.ws.rs.core.MediaType
import javax.ws.rs.core.Response

@Path("/photolibrary/api")
class PhotoLibraryController(private val service: PhotoLibraryService) {


    @POST
    @Path("images/import")
    @Produces(MediaType.TEXT_PLAIN)
    fun importImages(@QueryParam("dir") dirPath: String): Response {
        val count = service.importDirectory(dirPath)
        return Response.accepted("Imported $count images.").build()
    }


    @GET
    @Path("images")
    @Produces(MediaType.APPLICATION_JSON)
    fun getAllImages():Response {
        val images = service.getAllImages()
        return Response.ok(images).build()
    }


}