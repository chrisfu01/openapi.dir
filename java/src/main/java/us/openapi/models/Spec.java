package us.openapi.models;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity()
@Table(name = "openapi_specs")
public class Spec {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "description")
	private String description;
	
	@Column(name = "spec")
	private String spec;
	
	@Column(name = "version")
	private String version;
	
	@Column(name = "source_repository")
	private String sourceRepository;
	
	@Column(name = "avatar_url")
	private String avatarURL;
	
	@ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(unique = true)
	private Publisher publisher;
	
	@ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(unique = true)
	private Category category;
	
	@Column(name = "num_comments")
	private Integer numComments;
	
	@OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(unique = true, name = "updated_by")
	private User updatedBy;
	
	@OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(unique = true, name = "created_by")
	private User createdBy;
	
	@Column(name = "created_at")
	private Date createdAt;
	
	@Column(name = "updated_at")
	private Date updatedAt;
	
	
	
	@Column(name = "tag")
	private String tag;
	
	@Column(name = "spec_url")
	private String specURL;
	
	
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getSpec() {
		return spec;
	}
	public void setSpec(String spec) {
		this.spec = spec;
	}
	public String getVersion() {
		return version;
	}
	public void setVersion(String version) {
		this.version = version;
	}
	public String getSourceRepository() {
		return sourceRepository;
	}
	public void setSourceRepository(String sourceRepository) {
		this.sourceRepository = sourceRepository;
	}
	public String getAvatarURL() {
		return avatarURL;
	}
	public void setAvatarURL(String avatarURL) {
		this.avatarURL = avatarURL;
	}
	
	
	public int getNumComments() {
		return numComments;
	}
	public void setNumComments(int numComments) {
		this.numComments = numComments;
	}
	public String getTag() {
		return tag;
	}
	public void setTag(String tag) {
		this.tag = tag;
	}
	public String getSpecURL() {
		return specURL;
	}
	public void setSpecURL(String specURL) {
		this.specURL = specURL;
	}
	
	public Publisher getPublisher() {
		return publisher;
	}
	public void setPublisher(Publisher publisher) {
		this.publisher = publisher;
	}
	public Category getCategory() {
		return category;
	}
	public void setCategory(Category category) {
		this.category = category;
	}
	public User getUpdatedBy() {
		return updatedBy;
	}
	public void setUpdatedBy(User updatedBy) {
		this.updatedBy = updatedBy;
	}
	public User getCreatedBy() {
		return createdBy;
	}
	public void setCreatedBy(User createdBy) {
		this.createdBy = createdBy;
	}
	public Date getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}
	public Date getUpdatedAt() {
		return updatedAt;
	}
	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}
}
