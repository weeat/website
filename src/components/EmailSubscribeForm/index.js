import React from 'react';

import jsonp from 'jsonp';
import { validate } from 'email-validator';

const MAILCHIMP_URL =
  'https://weeatapp.us17.list-manage.com/subscribe/post-json?u=92cdd8fc8fcc129db537df9df&id=b9b1461904';

class EmailSubscribeForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: ''
    };
  }

  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    e.stopPropagation();

    if (!validate(this.state.email)) {
      this.setState({
        status: 'error',
        msg: `"${this.state.email}" is not a valid email address`
      });
      return;
    }

    this.setState(
      {
        msg: null,
        status: 'sending'
      },
      this.postEmailToMailchimp()
    );
  };

  postEmailToMailchimp = () => {
    const url = `${MAILCHIMP_URL}
      &EMAIL=${encodeURIComponent(this.state.email)}
      &PATHNAME=${window.location.pathname}`;

    jsonp(url, { param: 'c' }, (err, data) => {
      if (err) {
        this.setState({
          status: 'error',
          msg: err
        });
        // Mailchimp errors & failures
      } else if (data.result !== 'success') {
        this.setState({
          status: 'error',
          msg: data.msg
        });
        // Posted email successfully to Mailchimp
      } else {
        this.setState({
          status: 'success',
          msg: data.msg
        });
      }
    });
  };

  render() {
    return (
      <div>
        {this.state.status === 'success' ? (
          <p className="title is-4">
            Thank you! Youʼll receive your invitation email shortly.
          </p>
        ) : (
          <div>
            <p className="title is-4">
              Want to find the best food?<br /> Request early access!
            </p>
            <form id="email-capture" method="post" noValidate>
              <div className="field has-addons has-addons-centered">
                <div className="control">
                  <input
                    className="input is-medium is-primary"
                    type="email"
                    name="email"
                    placeholder="you@email.com"
                    onChange={this.handleEmailChange}
                  />
                </div>
                <div className="control">
                  <button
                    className="button is-medium is-primary"
                    type="submit"
                    onClick={this.handleFormSubmit}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              {this.state.status === 'error' && (
                <p dangerouslySetInnerHTML={{ __html: this.state.msg }} />
              )}
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default EmailSubscribeForm;
