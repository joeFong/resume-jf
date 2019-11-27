// Import the LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element';
import { BulmaStyles } from './styles/bulma';
import { BulmaStepsStyles } from './styles/bulma-steps';
import { FontAwesomeStyles } from './styles/fontAwesome5';

// Extend the LitElement base class
class ResumJFSteps extends LitElement {
  static get styles() {
    return [
      css`
      :host {
        font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif !important;
      }
      `,
      BulmaStyles,
      BulmaStepsStyles,
      FontAwesomeStyles
    ]
  }

  static get properties() { 
    return {
      activeStep: {
        type: String
      }
    };
  }

  constructor() {
    super();
    this.activeStep = 'one';
  }

  connectedCallback() {
    super.connectedCallback();
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
        <ul class="steps has-content-centered">
          <li class="steps-segment ${this.activeStep == 'one' ? 'is-active' : ''}">
            <span class="steps-marker"></span>
            <div class="steps-content">
              <p class="is-size-4">Step 1</p>
              <p>Personal Information</p>
            </div>
          </li>
          <li class="steps-segment ${this.activeStep == 'two' ? 'is-active' : ''}">
            <span class="steps-marker"></span>
            <div class="steps-content">
              <p class="is-size-4">Step 2</p>
              <p>Social Media</p>
            </div>
          </li>
          <li class="steps-segment ${this.activeStep == 'three' ? 'is-active' : ''}">
            <span class="steps-marker"></span>
            <div class="steps-content">
              <p class="is-size-4">Step 3</p>
              <p>Professional Experience</p>
            </div>
          </li>
          <li class="steps-segment ${this.activeStep == 'four' ? 'is-active' : ''}">
            <span class="steps-marker"></span>
            <div class="steps-content">
              <p class="is-size-4">Step 4</p>
              <p>Experience</p>
            </div>
          </li>
          <li class="steps-segment ${this.activeStep == 'five' ? 'is-active' : ''}">
            <span class="steps-marker"></span>
            <div class="steps-content">
              <p class="is-size-4">Step 5</p>
              <p>Key Projects</p>
            </div>
          </li>
          <li class="steps-segment ${this.activeStep == 'six' ? 'is-active' : ''}">
            <span class="steps-marker"></span>
            <div class="steps-content">
              <p class="is-size-4">Step 6</p>
              <p>Education</p>
            </div>
          </li>
        </ul>
    `;
  }
}
// Register the new element with the browser.
customElements.define('resume-jf-steps', ResumJFSteps);

