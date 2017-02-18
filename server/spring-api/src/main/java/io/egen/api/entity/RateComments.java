package io.egen.api.entity;

import java.util.UUID;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

@Entity
@Table
@NamedQueries({
	@NamedQuery(name = "Comments.findAll", query = "SELECT c FROM RateComments c"),
	@NamedQuery(name = "Comments.findByMovie", query = "SELECT c FROM RateComments c WHERE c.movie.id = :pMovie")
})
public class RateComments {
	
	@Id
	private String id;
	
	private String comment;
	private int rating;
	
	@ManyToOne
	private Movie movie;
	
	public RateComments() {
		this.id = UUID.randomUUID().toString();
	}
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}
	
	public Movie getMovie() {
		return movie;
	}

	public void setMovie(Movie movie) {
		this.movie = movie;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}
}
