package hu.eotthon2.web;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PingController {

	@RequestMapping("/api/ping")
	public String ping() {
		return "Server is running";
	}

}
