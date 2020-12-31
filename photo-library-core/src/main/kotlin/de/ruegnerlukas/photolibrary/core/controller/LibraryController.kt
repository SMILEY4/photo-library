package de.ruegnerlukas.photolibrary.core.controller

import de.ruegnerlukas.photolibrary.core.service.library.InvalidLibraryDataException
import de.ruegnerlukas.photolibrary.core.service.library.LibraryService
import org.jboss.logging.Logger
import javax.ws.rs.POST
import javax.ws.rs.Path
import javax.ws.rs.QueryParam
import javax.ws.rs.core.Response


@Path("${ControllerConstants.PHOTO_LIB_BASE_URI}/api")
class LibraryController(val libraryService: LibraryService) {

    private val log: Logger = Logger.getLogger(LibraryController::class.java)


    /**
     * Creates a new project in the given directory and with the given path.
     * @param path the path to the target directory
     * @param name the name of the new library
     * @return
     * - 201 Created: when the library was successfully created
     * - 409 Conflict: when the library could not be created due to some error
     * - 500 Internal Error: when something completely unexpected happened
     */
    @POST
    @Path("library")
    fun createProject(
        @QueryParam("path") path: String,
        @QueryParam("name") name: String
    ): Response {
        log.info("Request: create library at '$path' with name '$name'.")
        return try {
            libraryService.create(path, name)
            log.info("Response: successfully created library at '$path' with name '$name'.")
            Response
                .status(Response.Status.CREATED)
                .header("Access-Control-Allow-Origin", "*")
                .build()
        } catch (e: InvalidLibraryDataException) {
            log.info("Response: failed to created library at '$path' with name '$name': ${e.message}")
            Response
                .status(Response.Status.CONFLICT)
                .entity(e.message)
                .header("Access-Control-Allow-Origin", "*")
                .build()
        } catch (e: Exception) {
            log.info("Response: failed to created library at '$path' with name '$name': ${e.message}")
            Response
                .status(Response.Status.INTERNAL_SERVER_ERROR)
                .header("Access-Control-Allow-Origin", "*")
                .build();
        }
    }

//
//    @PUT
//    @Path("project")
//    fun openProject(@QueryParam("path") path: String): Response {
//        log.info("BEFORE REQUEST: Load project from '$path'.")
//        projectService.openProject(path)
//        return Response.status(Response.Status.OK).build();
//    }
//
//
//    @GET
//    @Path("project")
//    fun getProjectInformation(): ProjectMeta {
//        log.info("BEFORE REQUEST: Get project info.")
//        return projectService.getProjectMeta()
//    }


}