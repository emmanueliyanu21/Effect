import React, { Component } from 'react'
import JobList from './jobList.js'

export class JobForm extends Component {

    state = {
        jobList: [{ index: Math.random(), jobTitle: "", employer: "", startDate: "", endDate: "", city: "", description: "" }]
    }

    handleChange = (e) => {
        if (["jobTitle", "employer", "startDate", "endDate", "city", "description"].includes(e.target.name)) {
            let jobList = [...this.state.jobList]
            jobList[e.target.dataset.id][e.target.name] = e.target.value;
        } else {
            this.setState({ [e.target.name]: e.target.value })
        }
    }

    addNewRow = (e) => {
        this.setState((prevState) => ({
            jobList: [...prevState.jobList, { index: Math.random(), jobTitle: "", employer: "", startDate: "", endDate: "", city: "", description: "" }],
        }));
    }

    deteteRow = (index) => {
        this.setState({
            jobList: this.state.jobList.filter((s, sindex) => index !== sindex),
        });
    }
    clickOnDelete(record) {
        this.setState({
            jobList: this.state.jobList.filter(r => r !== record)
        });
    }

    render() {
        let { jobList } = this.state//let { notes, date, description, taskList } = this.state
        return (
            <div className="content container">
                <JobList add={this.addNewRow} delete={this.clickOnDelete.bind(this)} jobList={jobList} />
                <div className="row col-md-12 py-5">
                    <button onClick={this.addNewRow} type="button" className="pull-left">Add Employment</button>
                </div>
            </div>
        )
    }
}

export default JobForm
