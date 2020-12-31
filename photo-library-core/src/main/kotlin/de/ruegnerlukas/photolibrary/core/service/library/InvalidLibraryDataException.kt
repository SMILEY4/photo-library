package de.ruegnerlukas.photolibrary.core.service.library

import java.util.stream.Collectors

class InvalidLibraryDataException(errors: List<String>) :
    Exception(errors.stream().collect(Collectors.joining("\n")))