package de.ruegnerlukas.photolibrary.core.common

import com.fasterxml.jackson.databind.ObjectMapper

class Json {
	companion object {

		fun pretty(obj: Any): String {
			return ObjectMapper()
				.writerWithDefaultPrettyPrinter()
				.writeValueAsString(obj)
		}

		fun compact(obj: Any): String {
			return ObjectMapper().writeValueAsString(obj)
		}

	}
}

