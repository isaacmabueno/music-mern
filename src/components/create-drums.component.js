import React, {Component} from 'react';
import "../App.css";

export default class CreateDrums extends Component {

    constructor(props) {
        super(props);

        this.onChangeDrumBrand = this.onChangeDrumBrand.bind(this);
        this.onChangeDrumModel = this.onChangeDrumModel.bind(this);
        this.onChangeDrumDescription = this.onChangeDrumDescription.bind(this);
        this.onChangeDrumReleaseDate = this.onChangeDrumReleaseDate.bind(this);
        this.onChangeDrumCost = this.onChangeDrumCost.bind(this);
        this.onChangeDrumImage = this.onChangeDrumImage.bind(this);
        this.onChangeDrumVideo = this.onChangeDrumVideo.bind(this);
        this.onChangeDrumLink = this.onChangeDrumLink.bind(this);
        this.onChangeDrumLevel = this.onChangeDrumLevel.bind(this);
        
        this.state = {
            drum_brand: '',
            drum_model: '',
            drum_description: '',
            release_date: '',
            drum_cost: '',
            drum_image: '',
            drum_video: '',
            drum_link: '',
            drum_level: ''
        }
    }

    onChangeDrumBrand(e) {
        this.setState({
            drum_brand: e.target.value
        });
    }
    onChangeDrumModel(e) {
        this.setState({
            drum_model: e.target.value
        });
    }
    onChangeDrumDescription(e) {
        this.setState({
            drum_description: e.target.value
        });
    }
    onChangeDrumReleaseDate(e) {
        this.setState({
            release_date: e.target.value
        });
    }
    onChangeDrumCost(e) {
        this.setState({
            drum_cost: e.target.value
        });
    }
    onChangeDrumImage(e) {
        this.setState({
            drum_image: e.target.value
        });
    }
    onChangeDrumVideo(e) {
        this.setState({
            drum_video: e.target.value
        });
    }
    onChangeDrumLink(e) {
        this.setState({
            drum_link: e.target.value
        });
    }
    onChangeDrumLevel(e) {
        this.setState({
            drum_level: e.target.value
        });
    }

    // this simplified function scoping and allows for the "this" to be valid
    onSubmit = (e) => {
        e.preventDefault();

        console.log(`Form Submitted`);
        console.log(`Todo Description: ${this.state.drum_brand}`);
        console.log(`Todo Description: ${this.state.drum_model}`);
        console.log(`Todo Description: ${this.state.drum_description}`);
        console.log(`Todo Description: ${this.state.release_date}`);
        console.log(`Todo Description: ${this.state.drum_cost}`);
        console.log(`Todo Description: ${this.state.drum_image}`);
        console.log(`Todo Description: ${this.state.drum_video}`);
        console.log(`Todo Description: ${this.state.drum_link}`);
        console.log(`Todo Description: ${this.state.drum_level}`);

        this.setState({
            drum_brand: '',
            drum_model: '',
            drum_description: '',
            release_date: '',
            drum_cost: '',
            drum_image: '',
            drum_video: '',
            drum_link: '',
            drum_level: ''
        });
    }

    render() {
        return (
            <div>
                <h3 className="page-title">Create New eDrum</h3>

                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Brand: </label>
                        <input type='text'
                                className='form-control'
                                value={this.state.drum_brand}
                                onChange={this.onChangeDrumBrand}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Model: </label>
                        <input type='text'
                                className='form-control'
                                value={this.state.drum_model}
                                onChange={this.onChangeDrumModel}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Description: </label>
                        <input type='text'
                                className='form-control'
                                value={this.state.drum_description}
                                onChange={this.onChangeDrumDescription}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Release Date: </label>
                        <input type='text'
                                className='form-control'
                                value={this.state.release_date}
                                onChange={this.onChangeDrumReleaseDate}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Cost: </label>
                        <input type='text'
                                className='form-control'
                                value={this.state.drum_cost}
                                onChange={this.onChangeDrumCost}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Image: </label>
                        <input type='text'
                                className='form-control'
                                value={this.state.drum_image}
                                onChange={this.onChangeDrumImage}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Video: </label>
                        <input type='text'
                                className='form-control'
                                value={this.state.drum_video}
                                onChange={this.onChangeDrumVideo}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Link to eDrums: </label>
                        <input type='text'
                                className='form-control'
                                value={this.state.drum_link}
                                onChange={this.onChangeDrumLink}
                        />
                    </div>

                    <div className="form-group">
                        <label>Experience Level</label><br/>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                    type="radio"
                                    name="experienceOptions"
                                    id="entryLevel"
                                    value="Entry Level"
                                    checked={this.state.drum_level==='Entry Level'}
                                    onChange={this.onChangeDrumLevel}
                                    />
                            <label className="form-check-label">Entry Level</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                    type="radio"
                                    name="experienceOptions"
                                    id="entryLevel"
                                    value="Intermediate"
                                    checked={this.state.drum_level==='Intermediate'}
                                    onChange={this.onChangeDrumLevel}
                                    />
                            <label className="form-check-label">Intermediate</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                    type="radio"
                                    name="experienceOptions"
                                    id="professional"
                                    value="Professional"
                                    checked={this.state.drum_level==='Professional'}
                                    onChange={this.onChangeDrumLevel}
                                    />
                            <label className="form-check-label">Professional</label>
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <input type="submit" value="Create eDrum Kit" className="btn btn-primary" ></input>
                    </div>
                </form>
            </div>
        )
    }
}