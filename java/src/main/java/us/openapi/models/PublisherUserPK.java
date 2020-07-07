package us.openapi.models;

import java.io.Serializable;

import javax.persistence.Embeddable;
import javax.persistence.ManyToOne;

@Embeddable
public class PublisherUserPK implements Serializable{

    private static final long serialVersionUID = -7261887879839337877L; 
	
    @ManyToOne
	private Publisher publisher;

	@ManyToOne
	private User user;

	public Publisher getPublisher() {
		return publisher;
	}

	public void setPublisher(Publisher publisher) {
		this.publisher = publisher;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
	
}
