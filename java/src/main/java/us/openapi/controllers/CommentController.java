package us.openapi.controllers;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import us.openapi.models.Comment;
import us.openapi.models.Publisher;
import us.openapi.models.User;

@RestController
public class CommentController {
	@RequestMapping(value = "/comment_post", method = RequestMethod.POST)
	public void postComment() {
		
	}
	
	@RequestMapping(value = "/comment_get/:id", method = RequestMethod.GET)
	public Collection<Comment> findCommentsById(int id) {
		return null;
	}
}
