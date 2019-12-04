// Import the LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element';
import './form-steps';
import { BulmaStyles } from './styles/bulma';
import { BulmaStepsStyles } from './styles/bulma-steps';
import { FontAwesomeStyles } from './styles/fontAwesome5';

// Extend the LitElement base class
class ResumeJFForm extends LitElement {
  static get styles() {
    return [
      BulmaStyles,
      BulmaStepsStyles,
      FontAwesomeStyles,
      css`
      :host {
        font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif !important;
      }
      .card { 
        height: 100vh;
      }
      .step-margin {
        margin-bottom: 20px;
      }
      .step-container {
        display: none;
      }
      .submit-btn { 
        display: none;
      }
      .active-step {
        display: block;
      }
      .action-control-container {
        display: flex;
        flex-direction: row;
        margin-top: 20px;
        justify-content: space-between;
      }
      `
    ]
  }

  static get properties() { 
    return {
      socialLinks: { 
        type: Array
      },
      professionalExperiences: {
        type: Array
      },
      experiences: {
        type: Array
      },
      keyProjects: {
        type: Array
      },
      education: {
        type: Array
      },
      response: {
        type: Object
      }, 
      submitted: {
        type: Boolean
      },
      copyPaste: {
        type: String
      },
      activeStep: {
        type: String
      },
      title: {
        type: String
      }
    };
  }

  constructor() {
    super();
    this.socialLinks = [];
    this.professionalExperiences = [];
    this.experiences = [];
    this.keyProjects = [];
    this.education = [];
    this.activeStep = 'one';
    this.title = '';

    this.response = {
      "firstName": "",
      "lastName": "",
      "email": "",
      "phoneNumber": "",
      "socialMedia": [],
      "professionalSummary": [],
      "experience": [],
      "keyProjects": [],
      "education": []
    };

    this.submitted = false;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  addSocialLinks() {
    let arr = this.socialLinks;
    arr.push('');
    this.socialLinks = arr;
    this.requestUpdate('socialLinks');
  }

  removeSocialLinks() {
    let arr = this.socialLinks;
    arr.splice(arr.length - 1, 1);
    this.socialLinks = arr;
    this.requestUpdate('socialLinks');
  }
  addProfessionalExperience() {
    let arr = this.professionalExperiences;
    arr.push({
      skill: '',
      bolded: ''
    });
    this.professionalExperiences = arr;
    this.requestUpdate('professionalExperiences');
  }

  removeProfessionalExperience() {
    let arr = this.professionalExperiences;
    arr.splice(arr.length - 1, 1);
    this.professionalExperiences = arr;
    this.requestUpdate('professionalExperiences');
  }

  addExperience() {
    let arr = this.experiences;
    arr.push({
      "jobTitle": "",
      "role": "",
      "duration": "",
      "summaryOfCompany": "",
      "bulletsOfRole": [
      ]
    });
    this.experiences = arr;
    this.requestUpdate('experiences');
  }

  removeExperience() {
    let arr = this.experiences;
    arr.splice(arr.length - 1, 1);
    this.experiences = arr;
    this.requestUpdate('experiences');
  }

  addBulletsOfExperience(e) {
    let exp_index = e.target.getAttribute('data-index');
    let arr = this.experiences[exp_index].bulletsOfRole;
    arr.push('');
    this.experiences[exp_index].bulletsOfRole = arr;
    this.requestUpdate('experiences');
  }

  removeBulletsOfExperience(e) {
    let exp_index = e.target.getAttribute('data-index');
    let arr = this.experiences[exp_index].bulletsOfRole;
    arr.splice(arr.length - 1, 1);
    this.experiences[exp_index].bulletsOfRole = arr;
    this.requestUpdate('experiences');
  }

  addKeyProject() {
    let arr = this.keyProjects;
    arr.push({
      "projectName": "",
      "role": "",
      "bulletsOfRole": []
    });
    this.keyProjects = arr;
    this.requestUpdate('keyProjects');
  }

  removeKeyProject() {
    let arr = this.keyProjects;
    arr.splice(arr.length - 1, 1);
    this.keyProjects = arr;
    this.requestUpdate('keyProjects');
  }

  addBulletsOfKeyProject(e) {
    let exp_index = e.target.getAttribute('data-index');
    let arr = this.keyProjects[exp_index].bulletsOfRole;
    arr.push('');
    this.keyProjects[exp_index].bulletsOfRole = arr;
    this.requestUpdate('keyProjects');
  }

  removeBulletsOfKeyProject(e) {
    let exp_index = e.target.getAttribute('data-index');
    let arr = this.keyProjects[exp_index].bulletsOfRole;
    arr.splice(arr.length - 1, 1);
    this.keyProjects[exp_index].bulletsOfRole = arr;
    this.requestUpdate('keyProjects');
  }

  addEducation() {
    let arr = this.education;
    arr.push({
      "schoolName": "",
      "yearCompleted": "",
      "educationCompleted": ""
    });
    this.education = arr;
    this.requestUpdate('education');
  }

  removeEducation() {
    let arr = this.education;
    arr.splice(arr.length - 1, 1);
    this.education = arr;
    this.requestUpdate('education');
  }

  nextStep() {
    let steps = ['one', 'two', 'three', 'four', 'five', 'six'];

    //Do some validations
    if(!this.validateStepForm()) {
      return; //Exit cause failed validation
    }

    for(let i = 0; i < steps.length; i++) {
      if(steps[i] === this.activeStep) {
        this.activeStep = steps[i + 1];
        this.requestUpdate('activeStep');
        break;
      }
    }
  }

  previousStep() {
    let steps = ['one', 'two', 'three', 'four', 'five', 'six'];

    for(let i = 0; i < steps.length; i++) {
      if(steps[i] === this.activeStep) {
        this.activeStep = steps[i - 1];
        this.submitted = false;
        this.copyPaste = '';
        this.requestUpdate('activeStep');
        break;
      }
    }
  }

  validateStepForm() { 
    let currentStepField = this.shadowRoot.querySelectorAll('.active-step .field');
    let currentStepInputs = this.shadowRoot.querySelectorAll('.active-step input');
    let isValid = true; 

    //clear error labels inputs
    this.shadowRoot.querySelectorAll('.help').forEach(e => e.remove());
    
    if(currentStepInputs && currentStepInputs.length) {
      for(let i = 0; i < currentStepInputs.length; i++) {
        if(!currentStepInputs[i].value) {
          let errorEl = document.createElement('p');
          
          errorEl.className = 'help is-danger';
          errorEl.innerHTML = currentStepInputs[i].placeholder + ' is required';

          currentStepInputs[i].classList.add('is-danger');
          currentStepField[i].appendChild(errorEl);
          
          isValid = false;
        } else { 
          //clear input error highlights
          currentStepInputs[i].classList.remove('is-danger');
        }
      }
    }

    return isValid;
  }

  deployResume() {
    location.href = 'http://myonlinecv.xyz';
  }

  createResume() {
    //Do some validations
    if(!this.validateStepForm()) {
      return; //Exit cause failed validation
    }
    
    this.submitted = true;
    //Assign Repeaters
    this.response.socialLinks = this.socialLinks;
    this.response.professionalExperiences = this.professionalExperiences;
    this.response.experiences = this.experiences;
    this.response.keyProjects = this.keyProjects;
    this.response.education = this.education;

    //Either Send COPY paste
    this.copyPaste = `<resume-jf id='resume' theme='classic' resume='${JSON.stringify(this.response)}'></resume-jf>
<script src="https://cdn.jsdelivr.net/npm/resume-jf@1.0.2/dist/resume-jf.js"></script>
    `;
    
    this.requestUpdate('copyPaste');


    //Send to Server
  }

  /**
   * Implement `render` to define a template for your element.
   *
   * You must provide an implementation of `render` for any element
   * that uses LitElement as a base class.
   */
  render() {
    /**
     * `render` must return a lit-html `TemplateResult`.
     *
     * To create a `TemplateResult`, tag a JavaScript template literal
     * with the `html` helper function:
     */

    return html`
    <div class="card">
      <div class="card-content">
        ${this.title && html`<h1 class="title">Resume JF Form</h1>`}
        <h3 class="subtitle">Fill in this form to quickly deploy your own online resume.</h3>
        
        <div class="step-margin">
          <resume-jf-steps activestep="${this.activeStep}"></resume-jf-steps>
        </div>

        <div class="content">
          <div class="step-container ${this.activeStep == 'one' ? 'active-step' : ''}">
            <div class="field">
              <p class="control has-icons-left has-icons-right">
                <input class="input" @change="${e => this.response.firstName = e.target.value}" value="${this.response.firstName}" type="text" placeholder="First Name">
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </p>
            </div>
            
            <div class="field">
              <p class="control has-icons-left">
                <input class="input" @change="${e => this.response.lastName = e.target.value}" value="${this.response.lastName}" type="text" placeholder="Last Name">
                <span class="icon is-small is-left">
                  <i class="fas fa-lock"></i>
                </span>
              </p>
            </div>
            
            <div class="field">
              <p class="control has-icons-left">
                <input class="input" @change="${e => this.response.email = e.target.value}" value="${this.response.email}" type="email" placeholder="Email">
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
              </p>
            </div>
            
            <div class="field">
              <p class="control has-icons-left">
                <input class="input" @change="${e => this.response.phoneNumber = e.target.value}" value="${this.response.phoneNumber}" type="tel" placeholder="Phone Number">
                <span class="icon is-small is-left">
                  <i class="fas fa-phone-square"></i>
                </span>
              </p>
            </div>
          </div>

          <div class="step-container ${this.activeStep == 'two' ? 'active-step' : ''}">
            <div class="field">
              <label class="label">Social Links</label>
              <div class="control">
                <div class="field">
                  <p class="control">
                    <button class="button is-success" @click="${this.addSocialLinks}">
                      Add
                    </button>
                    <button class="button is-danger" @click="${this.removeSocialLinks}">
                      Remove
                    </button>
                  </p>
                </div>
                ${this.socialLinks.map(i => html`
                  <div class="field">
                    <input value="${i}" class="input" type="text" placeholder="Social Links">
                  </div>
                `)}
              </div>
            </div>
          </div>

          <div class="step-container ${this.activeStep == 'three' ? 'active-step' : ''}">
            <div class="field">
              <label class="label">Professional Experience</label>
              <div class="control">
                <div class="field">
                  <p class="control">
                    <button class="button is-success" @click="${this.addProfessionalExperience}">
                      Add
                    </button>
                    <button class="button is-danger" @click="${this.removeProfessionalExperience}">
                      Remove
                    </button>
                  </p>
                </div>
                ${this.professionalExperiences.map(i => html`
                  <div class="field">
                    <input value="${i.skill}" class="input" type="text" placeholder="Skill">
                  </div>
                  <div class="field">
                    <input value="${i.bolded}" class="input" type="text" placeholder="Bolded">
                  </div>
                `)}
              </div>
            </div>
          </div>

          <div class="step-container ${this.activeStep == 'four' ? 'active-step' : ''}">
            <div class="field">
              <label class="label">Experience</label>
              <div class="control">
                <div class="field">
                  <p class="control">
                    <button class="button is-success" @click="${this.addExperience}">
                      Add
                    </button>
                    <button class="button is-danger" @click="${this.removeExperience}">
                      Remove
                    </button>
                  </p>
                </div>
                ${this.experiences.map((i, key) => html`
                  <div class="field">
                    <input value="${i.jobTitle}" class="input" type="text" placeholder="Job Title">
                  </div>
                  <div class="field">
                    <input value="${i.role}" class="input" type="text" placeholder="Role">
                  </div>
                  <div class="field">
                    <input value="${i.duration}" class="input" type="text" placeholder="Duration">
                  </div>
                  <div class="field">
                    <input value="${i.summaryOfCompany}" class="input" type="text" placeholder="Summary of Company">
                  </div>
                  <div class="field">
                    <p class="control">
                      <button class="button is-success" data-index="${key}" @click="${this.addBulletsOfExperience}">
                        Add Bullet
                      </button>
                      <button class="button is-danger" data-index="${key}" @click="${this.removeBulletsOfExperience}">
                        Remove Bullet
                      </button>
                    </p>
                  </div>
                  ${i.bulletsOfRole.map(i => html`
                  <div class="field">
                    <input value="${i}" class="input" type="text" placeholder="What did you do?">
                  </div>
                  `)}
                `)}
              </div>
            </div>
          </div>

          <div class="step-container ${this.activeStep == 'five' ? 'active-step' : ''}">
            <div class="field">
              <label class="label">Key Projects</label>
              <div class="control">
                <div class="field">
                  <p class="control">
                    <button class="button is-success" @click="${this.addKeyProject}">
                      Add
                    </button>
                    <button class="button is-danger" @click="${this.removeKeyProject}">
                      Remove
                    </button>
                  </p>
                </div>
                ${this.keyProjects.map((i, key) => html`
                  <div class="field">
                    <input value="${i.role}" class="input" type="text" placeholder="Job Title">
                  </div>
                  <div class="field">
                    <input value="${i.projectName}" class="input" type="text" placeholder="Role">
                  </div>
                  <div class="field">
                    <p class="control">
                      <button class="button is-success" data-index="${key}" @click="${this.addBulletsOfProjects}">
                        Add Bullet
                      </button>
                      <button class="button is-danger" data-index="${key}" @click="${this.removeBulletsOfProjects}">
                        Remove Bullet
                      </button>
                    </p>
                  </div>
                  ${i.bulletsOfRole.map(i => html`
                  <div class="field">
                    <input value="${i}" class="input" type="text" placeholder="What did you do?">
                  </div>
                  `)}
                `)}
              </div>
            </div>
          </div>

          <div class="step-container ${this.activeStep == 'six' ? 'active-step' : ''}">
            <div class="field">
              <label class="label">Education</label>
              <div class="control">
                <div class="field">
                  <p class="control">
                    <button class="button is-success" @click="${this.addEducation}">
                      Add
                    </button>
                    <button class="button is-danger" @click="${this.removeEducation}">
                      Remove
                    </button>
                  </p>
                </div>
                ${this.education.map((i, key) => html`
                  <div class="field">
                    <input value="${i.schoolName}" class="input" type="text" placeholder="School">
                  </div>
                  <div class="field">
                    <input value="${i.yearCompleted}" class="input" type="text" placeholder="2017">
                  </div>
                  <div class="field">
                    <input value="${i.educationCompleted}" class="input" type="text" placeholder="Education Completed">
                  </div>
                `)}
              </div>
            </div>
            
          </div>
          
          
          <div class="action-control-container field">
            <p class="action-control previous">
              <button class="button is-success ${this.activeStep != 'one' ? 'active-step' : 'submit-btn'}" @click="${this.previousStep}">
                Previous Step
              </button>
            </p>

            <p class="action-control next">
              <button class="button is-success ${this.activeStep == 'six' ? 'active-step' : 'submit-btn'}" @click="${this.createResume}">
                Submit
              </button>

              <button class="button is-success ${this.activeStep != 'six' ? 'active-step' : 'submit-btn'}" @click="${this.nextStep}">
                Next Step
              </button>
            </p>
          </div>
          
          ${this.submitted ? 
            html`
            <h1 class="title">Copy/Paste</h1>
            <h2 class="subtitle">Take this snippet and quickly deploy your online resume quickly.</h2>
            <div class="field">
              <div class="control">
                <textarea class="textarea is-info" readonly placeholder="Info textarea">${this.copyPaste}</textarea>
              </div>
            </div>
            <h2 class="subtitle">Or deploy on myonlinecv.xyz</h2>
            <div class="field">
              <div class="control">
                <button @click="${this.deployResume}" class="button is-success">
                  Deploy
                </button>
              </div>
            </div>`: null
          }
          
        </div>
      </div>
    </div>
    `;
  }
}
// Register the new element with the browser.
customElements.define('resume-jf-form', ResumeJFForm);

