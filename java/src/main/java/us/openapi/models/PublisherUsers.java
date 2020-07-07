package us.openapi.models;

import java.beans.Transient;
import java.util.Date;

import javax.persistence.AssociationOverride;
import javax.persistence.AssociationOverrides;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.JoinColumn;

@Entity()
@Table(name = "publisher_users")

@AssociationOverrides({
@AssociationOverride(name = "primaryKey.user", joinColumns = @JoinColumn(name = "user_id")),
@AssociationOverride(name = "primaryKey.publisher", joinColumns = @JoinColumn(name = "publisher_id"))
})
public class PublisherUsers {
	@EmbeddedId
 	private PublisherUserPK primaryKey = new PublisherUserPK();
	
	
	@Column(name = "role")
	private String role;
	

	public PublisherUserPK getPrimaryKey() {
		return primaryKey;
	}
	
	public void setPrimaryKey(PublisherUserPK primaryKey) {
		this.primaryKey = primaryKey;
	}
	
	
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	
	
	
}
