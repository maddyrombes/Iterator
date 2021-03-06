import React, { Component } from 'react'; 

const url = 'https://iterator.herokuapp.com/articles/'

class UpdateArticle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            author: "",
            content: "",
            userObject: ""
        }
        this.onUpdateChange = this.onUpdateChange.bind(this)
        this.onUpdateSubmit = this.onUpdateSubmit.bind(this)
    }

    onUpdateChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    onUpdateSubmit = async (e) => {
        e.preventDefault()
        let data = {
            id: this.props.id,
            title: this.state.title || this.props.article.title,
            author: this.state.author || this.props.article.author,
            content: this.state.content || this.props.article.content
        }

        await fetch(`${url}${data.id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            return response.json()
        })
    }

    render() {
        return (
            <div className={this.props.userObject.id === this.props.article.userId ? "updatearticle__container" : "hide"}>
                <div className="updatearticle__title">Update Your Article</div>
                <form className="updatearticle__form" onSubmit={async (e) =>{
                    e.preventDefault()
                    await this.onUpdateSubmit(e)
                    this.setState({
                        title: "",
                        author: "",
                        content: ""
                    })
                }}>
                    <div className="updatearticle__field">
                        <label className="updatearticle__label" htmlFor="title">title</label>
                        <input onChange={this.onUpdateChange}
                            className="updatearticle__input"
                            type="text"
                            name="title"
                            placeholder="change title"
                            value={this.state.title}
                        />
                    </div>
                    <div className="updatearticle__field">
                        <label className="updatearticle__label" htmlFor="author">author</label>
                        <input onChange={this.onUpdateChange}
                            className="updatearticle__input"
                            type="text"
                            name="author"
                            placeholder="change names"
                            value={this.state.author}
                        />
                    </div>
                    <div className="updatearticle__field">
                        <label className="updatearticle__label" htmlFor="content">article content</label>
                        <textarea onChange={this.onUpdateChange}
                            className="updatearticle__input"
                            type="text"
                            name="content"
                            placeholder="update text here"
                            value={this.state.content}>
                            </textarea>
                    </div>
                    <button type="submit" className="updatearticle__submit--button">Submit</button>
                </form>
            </div>
        )
    }
}

export default UpdateArticle