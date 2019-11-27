import { css } from 'lit-element';

export const BulmaStepsStyles = css`
@keyframes spinAround {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

.steps:not(:last-child) {
  margin-bottom: 1.5rem;
}

.steps .steps-segment {
  position: relative;
}

.steps .steps-segment:not(:last-child):after {
  content: " ";
  display: block;
  position: absolute;
}

@media screen and (max-width: 768px) {
  .steps:not(.is-horizontal) .steps-segment {
    display: block;
  }
  .steps:not(.is-horizontal) .steps-segment:not(:last-child) {
    min-height: 4em;
  }
  .steps:not(.is-horizontal).is-short .steps-segment {
    flex-grow: 0;
  }
  .steps:not(.is-horizontal).is-short.is-centered {
    justify-content: center;
  }
  .steps:not(.is-horizontal).is-short.is-bottom {
    justify-content: flex-end;
  }
  .steps:not(.is-horizontal):not(.is-short) {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .steps:not(.is-horizontal):not(.is-short) .steps-segment:not(:last-child) {
    flex-grow: 1;
  }
}

.steps.is-vertical .steps-segment {
  display: block;
}

.steps.is-vertical .steps-segment:not(:last-child) {
  min-height: 4em;
}

.steps.is-vertical.is-short .steps-segment {
  flex-grow: 0;
}

.steps.is-vertical.is-short.is-centered {
  justify-content: center;
}

.steps.is-vertical.is-short.is-bottom {
  justify-content: flex-end;
}

.steps.is-vertical:not(.is-short) {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.steps.is-vertical:not(.is-short) .steps-segment:not(:last-child) {
  flex-grow: 1;
}

@media screen and (min-width: 769px), print {
  .steps:not(.is-vertical) {
    display: flex;
  }
  .steps:not(.is-vertical) .steps-segment:not(:last-child) {
    flex-basis: 1rem;
    flex-grow: 1;
    flex-shrink: 1;
  }
  .steps:not(.is-vertical).is-narrow .steps-segment {
    flex-grow: 0;
  }
  .steps:not(.is-vertical).is-narrow .steps-segment:not(:last-child) {
    min-width: 10em;
  }
  .steps:not(.is-vertical).is-narrow.is-centered {
    justify-content: center;
  }
  .steps:not(.is-vertical).is-narrow.is-right {
    justify-content: flex-end;
  }
  .steps:not(.is-vertical).has-content-centered {
    text-align: center;
  }
  .steps:not(.is-vertical).is-balanced .steps-segment:last-child, .steps:not(.is-vertical).has-content-centered .steps-segment:last-child {
    flex-basis: 1rem;
    flex-grow: 1;
    flex-shrink: 1;
  }
  .steps:not(.is-vertical).is-narrow.has-content-centered .steps-segment:last-child {
    flex-grow: 0;
    min-width: 10em;
  }
  .steps:not(.is-vertical) .steps-content.is-divider-content {
    text-align: center;
  }
}

.steps.is-horizontal {
  display: flex;
}

.steps.is-horizontal .steps-segment:not(:last-child) {
  flex-basis: 1rem;
  flex-grow: 1;
  flex-shrink: 1;
}

.steps.is-horizontal.is-narrow .steps-segment {
  flex-grow: 0;
}

.steps.is-horizontal.is-narrow .steps-segment:not(:last-child) {
  min-width: 10em;
}

.steps.is-horizontal.is-narrow.is-centered {
  justify-content: center;
}

.steps.is-horizontal.is-narrow.is-right {
  justify-content: flex-end;
}

.steps.is-horizontal.has-content-centered {
  text-align: center;
}

.steps.is-horizontal.is-balanced .steps-segment:last-child, .steps.is-horizontal.has-content-centered .steps-segment:last-child {
  flex-basis: 1rem;
  flex-grow: 1;
  flex-shrink: 1;
}

.steps.is-horizontal.is-narrow.has-content-centered .steps-segment:last-child {
  flex-grow: 0;
  min-width: 10em;
}

.steps.is-horizontal .steps-content.is-divider-content {
  text-align: center;
}

.steps .steps-marker {
  align-items: center;
  display: flex;
  border-radius: 50%;
  font-weight: 700;
  justify-content: center;
  position: relative;
  z-index: 5;
}

.steps {
  font-size: 1rem;
}

.steps .steps-marker {
  height: 2rem;
  width: 2rem;
  overflow: hidden;
}

@media screen and (max-width: 768px) {
  .steps:not(.is-horizontal) {
    display: flex;
    flex-direction: column;
  }
  .steps:not(.is-horizontal) .steps-segment:not(:last-child):after {
    bottom: -0.24rem;
    left: calc(1rem - (0.2em));
    top: 1.76rem;
    width: 0.4em;
  }
  .steps:not(.is-horizontal) .steps-content {
    margin-left: calc(1rem + .5em);
    margin-top: -2rem;
    padding-left: 1em;
    padding-bottom: 1em;
  }
  .steps:not(.is-horizontal) .steps-content.is-divider-content {
    margin-top: 0;
    padding-bottom: 0;
  }
  .steps:not(.is-horizontal).has-content-centered .steps-content {
    padding-top: calc(1rem - .5em);
  }
  .steps:not(.is-horizontal):not(.is-thin).has-gaps .steps-segment:not(:last-child):after, .steps:not(.is-horizontal):not(.is-thin) .steps-segment.has-gaps:not(:last-child):after {
    top: 2.3rem;
    bottom: 0.3rem;
  }
}

.steps.is-vertical {
  display: flex;
  flex-direction: column;
}

.steps.is-vertical .steps-segment:not(:last-child):after {
  bottom: -0.24rem;
  left: calc(1rem - (0.2em));
  top: 1.76rem;
  width: 0.4em;
}

.steps.is-vertical .steps-content {
  margin-left: calc(1rem + .5em);
  margin-top: -2rem;
  padding-left: 1em;
  padding-bottom: 1em;
}

.steps.is-vertical .steps-content.is-divider-content {
  margin-top: 0;
  padding-bottom: 0;
}

.steps.is-vertical.has-content-centered .steps-content {
  padding-top: calc(1rem - .5em);
}

.steps.is-vertical:not(.is-thin).has-gaps .steps-segment:not(:last-child):after, .steps.is-vertical:not(.is-thin) .steps-segment.has-gaps:not(:last-child):after {
  top: 2.3rem;
  bottom: 0.3rem;
}

@media screen and (min-width: 769px), print {
  .steps:not(.is-vertical) .steps-segment:not(:last-child):after {
    height: 0.4em;
    left: 1.76rem;
    right: -0.24rem;
    top: calc(1rem - (0.2em));
  }
  .steps:not(.is-vertical).has-content-above .steps-segment:not(:last-child)::after {
    bottom: calc(1rem - (0.2em));
    top: auto;
  }
  .steps:not(.is-vertical) .extra-data {
    left: calc(50% + 1.3rem);
    right: calc(-50% + 1.3rem);
    bottom: 100%;
    position: absolute;
  }
  .steps:not(.is-vertical) .extra-data.has-overflow-right {
    overflow: visible;
    right: auto;
    white-space: nowrap;
    min-width: calc(100% - 1rem - (0.2em));
  }
  .steps:not(.is-vertical) .extra-data.has-overflow-left {
    overflow: visible;
    left: auto;
    white-space: nowrap;
    min-width: calc(100% - 1rem - (0.2em));
  }
  .steps:not(.is-vertical) .extra-data.has-overflow-centered {
    overflow: visible;
    left: auto;
    white-space: nowrap;
    min-width: calc(100% - 1rem - (0.2em));
  }
  .steps:not(.is-vertical).has-content-above .extra-data {
    top: 100%;
    bottom: auto;
  }
  .steps:not(.is-vertical) .steps-content {
    margin-left: 1rem;
  }
  .steps:not(.is-vertical) .steps-content:not(:last-child) {
    margin-right: -1rem;
  }
  .steps:not(.is-vertical) .steps-content.is-divider-content {
    margin-right: -1rem;
    padding-left: 2em;
    padding-right: 2em;
  }
  .steps:not(.is-vertical).has-content-centered .steps-segment:not(:last-child):after {
    left: 50%;
    right: -50%;
  }
  .steps:not(.is-vertical).has-content-centered .steps-marker {
    position: absolute;
    left: calc(50% - 1rem);
  }
  .steps:not(.is-vertical).has-content-centered .steps-content {
    margin-top: 2rem;
    margin-left: .5em;
    margin-right: .5em;
    padding-top: .2em;
  }
  .steps:not(.is-vertical).has-content-above.has-content-centered .steps-content {
    margin-bottom: 2rem;
    padding-bottom: .2em;
  }
  .steps:not(.is-vertical):not(.is-thin).has-gaps .steps-segment:not(:last-child):after, .steps:not(.is-vertical):not(.is-thin) .steps-segment.has-gaps:not(:last-child):after {
    left: 2.3rem;
    right: 0.3rem;
  }
  .steps:not(.is-vertical):not(.is-thin).has-content-centered.has-gaps .steps-segment:not(:last-child):after, .steps:not(.is-vertical):not(.is-thin).has-content-centered .steps-segment.has-gaps:not(:last-child):after {
    left: calc(50% + 1.3rem);
    right: calc(-50% + 1.3rem);
  }
}

.steps.is-horizontal .steps-segment:not(:last-child):after {
  height: 0.4em;
  left: 1.76rem;
  right: -0.24rem;
  top: calc(1rem - (0.2em));
}

.steps.is-horizontal.has-content-above .steps-segment:not(:last-child)::after {
  bottom: calc(1rem - (0.2em));
  top: auto;
}

.steps.is-horizontal .extra-data {
  left: calc(50% + 1.3rem);
  right: calc(-50% + 1.3rem);
  bottom: 100%;
  position: absolute;
}

.steps.is-horizontal .extra-data.has-overflow-right {
  overflow: visible;
  right: auto;
  white-space: nowrap;
  min-width: calc(100% - 1rem - (0.2em));
}

.steps.is-horizontal .extra-data.has-overflow-left {
  overflow: visible;
  left: auto;
  white-space: nowrap;
  min-width: calc(100% - 1rem - (0.2em));
}

.steps.is-horizontal .extra-data.has-overflow-centered {
  overflow: visible;
  left: auto;
  white-space: nowrap;
  min-width: calc(100% - 1rem - (0.2em));
}

.steps.is-horizontal.has-content-above .extra-data {
  top: 100%;
  bottom: auto;
}

.steps.is-horizontal .steps-content {
  margin-left: 1rem;
}

.steps.is-horizontal .steps-content:not(:last-child) {
  margin-right: -1rem;
}

.steps.is-horizontal .steps-content.is-divider-content {
  margin-right: -1rem;
  padding-left: 2em;
  padding-right: 2em;
}

.steps.is-horizontal.has-content-centered .steps-segment:not(:last-child):after {
  left: 50%;
  right: -50%;
}

.steps.is-horizontal.has-content-centered .steps-marker {
  position: absolute;
  left: calc(50% - 1rem);
}

.steps.is-horizontal.has-content-centered .steps-content {
  margin-top: 2rem;
  margin-left: .5em;
  margin-right: .5em;
  padding-top: .2em;
}

.steps.is-horizontal.has-content-above.has-content-centered .steps-content {
  margin-bottom: 2rem;
  padding-bottom: .2em;
}

.steps.is-horizontal:not(.is-thin).has-gaps .steps-segment:not(:last-child):after, .steps.is-horizontal:not(.is-thin) .steps-segment.has-gaps:not(:last-child):after {
  left: 2.3rem;
  right: 0.3rem;
}

.steps.is-horizontal:not(.is-thin).has-content-centered.has-gaps .steps-segment:not(:last-child):after, .steps.is-horizontal:not(.is-thin).has-content-centered .steps-segment.has-gaps:not(:last-child):after {
  left: calc(50% + 1.3rem);
  right: calc(-50% + 1.3rem);
}

.steps.is-small {
  font-size: 0.75rem;
}

.steps.is-small .steps-marker {
  height: 1.5rem;
  width: 1.5rem;
  overflow: hidden;
}

@media screen and (max-width: 768px) {
  .steps.is-small:not(.is-horizontal) {
    display: flex;
    flex-direction: column;
  }
  .steps.is-small:not(.is-horizontal) .steps-segment:not(:last-child):after {
    bottom: -0.24rem;
    left: calc(0.75rem - (0.2em));
    top: 1.26rem;
    width: 0.4em;
  }
  .steps.is-small:not(.is-horizontal) .steps-content {
    margin-left: calc(0.75rem + .5em);
    margin-top: -1.5rem;
    padding-left: 1em;
    padding-bottom: 1em;
  }
  .steps.is-small:not(.is-horizontal) .steps-content.is-divider-content {
    margin-top: 0;
    padding-bottom: 0;
  }
  .steps.is-small:not(.is-horizontal).has-content-centered .steps-content {
    padding-top: calc(0.75rem - .5em);
  }
  .steps.is-small:not(.is-horizontal):not(.is-thin).has-gaps .steps-segment:not(:last-child):after, .steps.is-small:not(.is-horizontal):not(.is-thin) .steps-segment.has-gaps:not(:last-child):after {
    top: 1.8rem;
    bottom: 0.3rem;
  }
}

.steps.is-small.is-vertical {
  display: flex;
  flex-direction: column;
}

.steps.is-small.is-vertical .steps-segment:not(:last-child):after {
  bottom: -0.24rem;
  left: calc(0.75rem - (0.2em));
  top: 1.26rem;
  width: 0.4em;
}

.steps.is-small.is-vertical .steps-content {
  margin-left: calc(0.75rem + .5em);
  margin-top: -1.5rem;
  padding-left: 1em;
  padding-bottom: 1em;
}

.steps.is-small.is-vertical .steps-content.is-divider-content {
  margin-top: 0;
  padding-bottom: 0;
}

.steps.is-small.is-vertical.has-content-centered .steps-content {
  padding-top: calc(0.75rem - .5em);
}

.steps.is-small.is-vertical:not(.is-thin).has-gaps .steps-segment:not(:last-child):after, .steps.is-small.is-vertical:not(.is-thin) .steps-segment.has-gaps:not(:last-child):after {
  top: 1.8rem;
  bottom: 0.3rem;
}

@media screen and (min-width: 769px), print {
  .steps.is-small:not(.is-vertical) .steps-segment:not(:last-child):after {
    height: 0.4em;
    left: 1.26rem;
    right: -0.24rem;
    top: calc(0.75rem - (0.2em));
  }
  .steps.is-small:not(.is-vertical).has-content-above .steps-segment:not(:last-child)::after {
    bottom: calc(0.75rem - (0.2em));
    top: auto;
  }
  .steps.is-small:not(.is-vertical) .extra-data {
    left: calc(50% + 1.05rem);
    right: calc(-50% + 1.05rem);
    bottom: 100%;
    position: absolute;
  }
  .steps.is-small:not(.is-vertical) .extra-data.has-overflow-right {
    overflow: visible;
    right: auto;
    white-space: nowrap;
    min-width: calc(100% - 0.75rem - (0.2em));
  }
  .steps.is-small:not(.is-vertical) .extra-data.has-overflow-left {
    overflow: visible;
    left: auto;
    white-space: nowrap;
    min-width: calc(100% - 0.75rem - (0.2em));
  }
  .steps.is-small:not(.is-vertical) .extra-data.has-overflow-centered {
    overflow: visible;
    left: auto;
    white-space: nowrap;
    min-width: calc(100% - 0.75rem - (0.2em));
  }
  .steps.is-small:not(.is-vertical).has-content-above .extra-data {
    top: 100%;
    bottom: auto;
  }
  .steps.is-small:not(.is-vertical) .steps-content {
    margin-left: 0.75rem;
  }
  .steps.is-small:not(.is-vertical) .steps-content:not(:last-child) {
    margin-right: -0.75rem;
  }
  .steps.is-small:not(.is-vertical) .steps-content.is-divider-content {
    margin-right: -0.75rem;
    padding-left: 2em;
    padding-right: 2em;
  }
  .steps.is-small:not(.is-vertical).has-content-centered .steps-segment:not(:last-child):after {
    left: 50%;
    right: -50%;
  }
  .steps.is-small:not(.is-vertical).has-content-centered .steps-marker {
    position: absolute;
    left: calc(50% - 0.75rem);
  }
  .steps.is-small:not(.is-vertical).has-content-centered .steps-content {
    margin-top: 1.5rem;
    margin-left: .5em;
    margin-right: .5em;
    padding-top: .2em;
  }
  .steps.is-small:not(.is-vertical).has-content-above.has-content-centered .steps-content {
    margin-bottom: 1.5rem;
    padding-bottom: .2em;
  }
  .steps.is-small:not(.is-vertical):not(.is-thin).has-gaps .steps-segment:not(:last-child):after, .steps.is-small:not(.is-vertical):not(.is-thin) .steps-segment.has-gaps:not(:last-child):after {
    left: 1.8rem;
    right: 0.3rem;
  }
  .steps.is-small:not(.is-vertical):not(.is-thin).has-content-centered.has-gaps .steps-segment:not(:last-child):after, .steps.is-small:not(.is-vertical):not(.is-thin).has-content-centered .steps-segment.has-gaps:not(:last-child):after {
    left: calc(50% + 1.05rem);
    right: calc(-50% + 1.05rem);
  }
}

.steps.is-small.is-horizontal .steps-segment:not(:last-child):after {
  height: 0.4em;
  left: 1.26rem;
  right: -0.24rem;
  top: calc(0.75rem - (0.2em));
}

.steps.is-small.is-horizontal.has-content-above .steps-segment:not(:last-child)::after {
  bottom: calc(0.75rem - (0.2em));
  top: auto;
}

.steps.is-small.is-horizontal .extra-data {
  left: calc(50% + 1.05rem);
  right: calc(-50% + 1.05rem);
  bottom: 100%;
  position: absolute;
}

.steps.is-small.is-horizontal .extra-data.has-overflow-right {
  overflow: visible;
  right: auto;
  white-space: nowrap;
  min-width: calc(100% - 0.75rem - (0.2em));
}

.steps.is-small.is-horizontal .extra-data.has-overflow-left {
  overflow: visible;
  left: auto;
  white-space: nowrap;
  min-width: calc(100% - 0.75rem - (0.2em));
}

.steps.is-small.is-horizontal .extra-data.has-overflow-centered {
  overflow: visible;
  left: auto;
  white-space: nowrap;
  min-width: calc(100% - 0.75rem - (0.2em));
}

.steps.is-small.is-horizontal.has-content-above .extra-data {
  top: 100%;
  bottom: auto;
}

.steps.is-small.is-horizontal .steps-content {
  margin-left: 0.75rem;
}

.steps.is-small.is-horizontal .steps-content:not(:last-child) {
  margin-right: -0.75rem;
}

.steps.is-small.is-horizontal .steps-content.is-divider-content {
  margin-right: -0.75rem;
  padding-left: 2em;
  padding-right: 2em;
}

.steps.is-small.is-horizontal.has-content-centered .steps-segment:not(:last-child):after {
  left: 50%;
  right: -50%;
}

.steps.is-small.is-horizontal.has-content-centered .steps-marker {
  position: absolute;
  left: calc(50% - 0.75rem);
}

.steps.is-small.is-horizontal.has-content-centered .steps-content {
  margin-top: 1.5rem;
  margin-left: .5em;
  margin-right: .5em;
  padding-top: .2em;
}

.steps.is-small.is-horizontal.has-content-above.has-content-centered .steps-content {
  margin-bottom: 1.5rem;
  padding-bottom: .2em;
}

.steps.is-small.is-horizontal:not(.is-thin).has-gaps .steps-segment:not(:last-child):after, .steps.is-small.is-horizontal:not(.is-thin) .steps-segment.has-gaps:not(:last-child):after {
  left: 1.8rem;
  right: 0.3rem;
}

.steps.is-small.is-horizontal:not(.is-thin).has-content-centered.has-gaps .steps-segment:not(:last-child):after, .steps.is-small.is-horizontal:not(.is-thin).has-content-centered .steps-segment.has-gaps:not(:last-child):after {
  left: calc(50% + 1.05rem);
  right: calc(-50% + 1.05rem);
}

.steps.is-medium {
  font-size: 1.25rem;
}

.steps.is-medium .steps-marker {
  height: 2.5rem;
  width: 2.5rem;
  overflow: hidden;
}

@media screen and (max-width: 768px) {
  .steps.is-medium:not(.is-horizontal) {
    display: flex;
    flex-direction: column;
  }
  .steps.is-medium:not(.is-horizontal) .steps-segment:not(:last-child):after {
    bottom: -0.24rem;
    left: calc(1.25rem - (0.2em));
    top: 2.26rem;
    width: 0.4em;
  }
  .steps.is-medium:not(.is-horizontal) .steps-content {
    margin-left: calc(1.25rem + .5em);
    margin-top: -2.5rem;
    padding-left: 1em;
    padding-bottom: 1em;
  }
  .steps.is-medium:not(.is-horizontal) .steps-content.is-divider-content {
    margin-top: 0;
    padding-bottom: 0;
  }
  .steps.is-medium:not(.is-horizontal).has-content-centered .steps-content {
    padding-top: calc(1.25rem - .5em);
  }
  .steps.is-medium:not(.is-horizontal):not(.is-thin).has-gaps .steps-segment:not(:last-child):after, .steps.is-medium:not(.is-horizontal):not(.is-thin) .steps-segment.has-gaps:not(:last-child):after {
    top: 2.8rem;
    bottom: 0.3rem;
  }
}

.steps.is-medium.is-vertical {
  display: flex;
  flex-direction: column;
}

.steps.is-medium.is-vertical .steps-segment:not(:last-child):after {
  bottom: -0.24rem;
  left: calc(1.25rem - (0.2em));
  top: 2.26rem;
  width: 0.4em;
}

.steps.is-medium.is-vertical .steps-content {
  margin-left: calc(1.25rem + .5em);
  margin-top: -2.5rem;
  padding-left: 1em;
  padding-bottom: 1em;
}

.steps.is-medium.is-vertical .steps-content.is-divider-content {
  margin-top: 0;
  padding-bottom: 0;
}

.steps.is-medium.is-vertical.has-content-centered .steps-content {
  padding-top: calc(1.25rem - .5em);
}

.steps.is-medium.is-vertical:not(.is-thin).has-gaps .steps-segment:not(:last-child):after, .steps.is-medium.is-vertical:not(.is-thin) .steps-segment.has-gaps:not(:last-child):after {
  top: 2.8rem;
  bottom: 0.3rem;
}

@media screen and (min-width: 769px), print {
  .steps.is-medium:not(.is-vertical) .steps-segment:not(:last-child):after {
    height: 0.4em;
    left: 2.26rem;
    right: -0.24rem;
    top: calc(1.25rem - (0.2em));
  }
  .steps.is-medium:not(.is-vertical).has-content-above .steps-segment:not(:last-child)::after {
    bottom: calc(1.25rem - (0.2em));
    top: auto;
  }
  .steps.is-medium:not(.is-vertical) .extra-data {
    left: calc(50% + 1.55rem);
    right: calc(-50% + 1.55rem);
    bottom: 100%;
    position: absolute;
  }
  .steps.is-medium:not(.is-vertical) .extra-data.has-overflow-right {
    overflow: visible;
    right: auto;
    white-space: nowrap;
    min-width: calc(100% - 1.25rem - (0.2em));
  }
  .steps.is-medium:not(.is-vertical) .extra-data.has-overflow-left {
    overflow: visible;
    left: auto;
    white-space: nowrap;
    min-width: calc(100% - 1.25rem - (0.2em));
  }
  .steps.is-medium:not(.is-vertical) .extra-data.has-overflow-centered {
    overflow: visible;
    left: auto;
    white-space: nowrap;
    min-width: calc(100% - 1.25rem - (0.2em));
  }
  .steps.is-medium:not(.is-vertical).has-content-above .extra-data {
    top: 100%;
    bottom: auto;
  }
  .steps.is-medium:not(.is-vertical) .steps-content {
    margin-left: 1.25rem;
  }
  .steps.is-medium:not(.is-vertical) .steps-content:not(:last-child) {
    margin-right: -1.25rem;
  }
  .steps.is-medium:not(.is-vertical) .steps-content.is-divider-content {
    margin-right: -1.25rem;
    padding-left: 2em;
    padding-right: 2em;
  }
  .steps.is-medium:not(.is-vertical).has-content-centered .steps-segment:not(:last-child):after {
    left: 50%;
    right: -50%;
  }
  .steps.is-medium:not(.is-vertical).has-content-centered .steps-marker {
    position: absolute;
    left: calc(50% - 1.25rem);
  }
  .steps.is-medium:not(.is-vertical).has-content-centered .steps-content {
    margin-top: 2.5rem;
    margin-left: .5em;
    margin-right: .5em;
    padding-top: .2em;
  }
  .steps.is-medium:not(.is-vertical).has-content-above.has-content-centered .steps-content {
    margin-bottom: 2.5rem;
    padding-bottom: .2em;
  }
  .steps.is-medium:not(.is-vertical):not(.is-thin).has-gaps .steps-segment:not(:last-child):after, .steps.is-medium:not(.is-vertical):not(.is-thin) .steps-segment.has-gaps:not(:last-child):after {
    left: 2.8rem;
    right: 0.3rem;
  }
  .steps.is-medium:not(.is-vertical):not(.is-thin).has-content-centered.has-gaps .steps-segment:not(:last-child):after, .steps.is-medium:not(.is-vertical):not(.is-thin).has-content-centered .steps-segment.has-gaps:not(:last-child):after {
    left: calc(50% + 1.55rem);
    right: calc(-50% + 1.55rem);
  }
}

.steps.is-medium.is-horizontal .steps-segment:not(:last-child):after {
  height: 0.4em;
  left: 2.26rem;
  right: -0.24rem;
  top: calc(1.25rem - (0.2em));
}

.steps.is-medium.is-horizontal.has-content-above .steps-segment:not(:last-child)::after {
  bottom: calc(1.25rem - (0.2em));
  top: auto;
}

.steps.is-medium.is-horizontal .extra-data {
  left: calc(50% + 1.55rem);
  right: calc(-50% + 1.55rem);
  bottom: 100%;
  position: absolute;
}

.steps.is-medium.is-horizontal .extra-data.has-overflow-right {
  overflow: visible;
  right: auto;
  white-space: nowrap;
  min-width: calc(100% - 1.25rem - (0.2em));
}

.steps.is-medium.is-horizontal .extra-data.has-overflow-left {
  overflow: visible;
  left: auto;
  white-space: nowrap;
  min-width: calc(100% - 1.25rem - (0.2em));
}

.steps.is-medium.is-horizontal .extra-data.has-overflow-centered {
  overflow: visible;
  left: auto;
  white-space: nowrap;
  min-width: calc(100% - 1.25rem - (0.2em));
}

.steps.is-medium.is-horizontal.has-content-above .extra-data {
  top: 100%;
  bottom: auto;
}

.steps.is-medium.is-horizontal .steps-content {
  margin-left: 1.25rem;
}

.steps.is-medium.is-horizontal .steps-content:not(:last-child) {
  margin-right: -1.25rem;
}

.steps.is-medium.is-horizontal .steps-content.is-divider-content {
  margin-right: -1.25rem;
  padding-left: 2em;
  padding-right: 2em;
}

.steps.is-medium.is-horizontal.has-content-centered .steps-segment:not(:last-child):after {
  left: 50%;
  right: -50%;
}

.steps.is-medium.is-horizontal.has-content-centered .steps-marker {
  position: absolute;
  left: calc(50% - 1.25rem);
}

.steps.is-medium.is-horizontal.has-content-centered .steps-content {
  margin-top: 2.5rem;
  margin-left: .5em;
  margin-right: .5em;
  padding-top: .2em;
}

.steps.is-medium.is-horizontal.has-content-above.has-content-centered .steps-content {
  margin-bottom: 2.5rem;
  padding-bottom: .2em;
}

.steps.is-medium.is-horizontal:not(.is-thin).has-gaps .steps-segment:not(:last-child):after, .steps.is-medium.is-horizontal:not(.is-thin) .steps-segment.has-gaps:not(:last-child):after {
  left: 2.8rem;
  right: 0.3rem;
}

.steps.is-medium.is-horizontal:not(.is-thin).has-content-centered.has-gaps .steps-segment:not(:last-child):after, .steps.is-medium.is-horizontal:not(.is-thin).has-content-centered .steps-segment.has-gaps:not(:last-child):after {
  left: calc(50% + 1.55rem);
  right: calc(-50% + 1.55rem);
}

.steps.is-large {
  font-size: 1.5rem;
}

.steps.is-large .steps-marker {
  height: 3rem;
  width: 3rem;
  overflow: hidden;
}

@media screen and (max-width: 768px) {
  .steps.is-large:not(.is-horizontal) {
    display: flex;
    flex-direction: column;
  }
  .steps.is-large:not(.is-horizontal) .steps-segment:not(:last-child):after {
    bottom: -0.24rem;
    left: calc(1.5rem - (0.2em));
    top: 2.76rem;
    width: 0.4em;
  }
  .steps.is-large:not(.is-horizontal) .steps-content {
    margin-left: calc(1.5rem + .5em);
    margin-top: -3rem;
    padding-left: 1em;
    padding-bottom: 1em;
  }
  .steps.is-large:not(.is-horizontal) .steps-content.is-divider-content {
    margin-top: 0;
    padding-bottom: 0;
  }
  .steps.is-large:not(.is-horizontal).has-content-centered .steps-content {
    padding-top: calc(1.5rem - .5em);
  }
  .steps.is-large:not(.is-horizontal):not(.is-thin).has-gaps .steps-segment:not(:last-child):after, .steps.is-large:not(.is-horizontal):not(.is-thin) .steps-segment.has-gaps:not(:last-child):after {
    top: 3.3rem;
    bottom: 0.3rem;
  }
}

.steps.is-large.is-vertical {
  display: flex;
  flex-direction: column;
}

.steps.is-large.is-vertical .steps-segment:not(:last-child):after {
  bottom: -0.24rem;
  left: calc(1.5rem - (0.2em));
  top: 2.76rem;
  width: 0.4em;
}

.steps.is-large.is-vertical .steps-content {
  margin-left: calc(1.5rem + .5em);
  margin-top: -3rem;
  padding-left: 1em;
  padding-bottom: 1em;
}

.steps.is-large.is-vertical .steps-content.is-divider-content {
  margin-top: 0;
  padding-bottom: 0;
}

.steps.is-large.is-vertical.has-content-centered .steps-content {
  padding-top: calc(1.5rem - .5em);
}

.steps.is-large.is-vertical:not(.is-thin).has-gaps .steps-segment:not(:last-child):after, .steps.is-large.is-vertical:not(.is-thin) .steps-segment.has-gaps:not(:last-child):after {
  top: 3.3rem;
  bottom: 0.3rem;
}

@media screen and (min-width: 769px), print {
  .steps.is-large:not(.is-vertical) .steps-segment:not(:last-child):after {
    height: 0.4em;
    left: 2.76rem;
    right: -0.24rem;
    top: calc(1.5rem - (0.2em));
  }
  .steps.is-large:not(.is-vertical).has-content-above .steps-segment:not(:last-child)::after {
    bottom: calc(1.5rem - (0.2em));
    top: auto;
  }
  .steps.is-large:not(.is-vertical) .extra-data {
    left: calc(50% + 1.8rem);
    right: calc(-50% + 1.8rem);
    bottom: 100%;
    position: absolute;
  }
  .steps.is-large:not(.is-vertical) .extra-data.has-overflow-right {
    overflow: visible;
    right: auto;
    white-space: nowrap;
    min-width: calc(100% - 1.5rem - (0.2em));
  }
  .steps.is-large:not(.is-vertical) .extra-data.has-overflow-left {
    overflow: visible;
    left: auto;
    white-space: nowrap;
    min-width: calc(100% - 1.5rem - (0.2em));
  }
  .steps.is-large:not(.is-vertical) .extra-data.has-overflow-centered {
    overflow: visible;
    left: auto;
    white-space: nowrap;
    min-width: calc(100% - 1.5rem - (0.2em));
  }
  .steps.is-large:not(.is-vertical).has-content-above .extra-data {
    top: 100%;
    bottom: auto;
  }
  .steps.is-large:not(.is-vertical) .steps-content {
    margin-left: 1.5rem;
  }
  .steps.is-large:not(.is-vertical) .steps-content:not(:last-child) {
    margin-right: -1.5rem;
  }
  .steps.is-large:not(.is-vertical) .steps-content.is-divider-content {
    margin-right: -1.5rem;
    padding-left: 2em;
    padding-right: 2em;
  }
  .steps.is-large:not(.is-vertical).has-content-centered .steps-segment:not(:last-child):after {
    left: 50%;
    right: -50%;
  }
  .steps.is-large:not(.is-vertical).has-content-centered .steps-marker {
    position: absolute;
    left: calc(50% - 1.5rem);
  }
  .steps.is-large:not(.is-vertical).has-content-centered .steps-content {
    margin-top: 3rem;
    margin-left: .5em;
    margin-right: .5em;
    padding-top: .2em;
  }
  .steps.is-large:not(.is-vertical).has-content-above.has-content-centered .steps-content {
    margin-bottom: 3rem;
    padding-bottom: .2em;
  }
  .steps.is-large:not(.is-vertical):not(.is-thin).has-gaps .steps-segment:not(:last-child):after, .steps.is-large:not(.is-vertical):not(.is-thin) .steps-segment.has-gaps:not(:last-child):after {
    left: 3.3rem;
    right: 0.3rem;
  }
  .steps.is-large:not(.is-vertical):not(.is-thin).has-content-centered.has-gaps .steps-segment:not(:last-child):after, .steps.is-large:not(.is-vertical):not(.is-thin).has-content-centered .steps-segment.has-gaps:not(:last-child):after {
    left: calc(50% + 1.8rem);
    right: calc(-50% + 1.8rem);
  }
}

.steps.is-large.is-horizontal .steps-segment:not(:last-child):after {
  height: 0.4em;
  left: 2.76rem;
  right: -0.24rem;
  top: calc(1.5rem - (0.2em));
}

.steps.is-large.is-horizontal.has-content-above .steps-segment:not(:last-child)::after {
  bottom: calc(1.5rem - (0.2em));
  top: auto;
}

.steps.is-large.is-horizontal .extra-data {
  left: calc(50% + 1.8rem);
  right: calc(-50% + 1.8rem);
  bottom: 100%;
  position: absolute;
}

.steps.is-large.is-horizontal .extra-data.has-overflow-right {
  overflow: visible;
  right: auto;
  white-space: nowrap;
  min-width: calc(100% - 1.5rem - (0.2em));
}

.steps.is-large.is-horizontal .extra-data.has-overflow-left {
  overflow: visible;
  left: auto;
  white-space: nowrap;
  min-width: calc(100% - 1.5rem - (0.2em));
}

.steps.is-large.is-horizontal .extra-data.has-overflow-centered {
  overflow: visible;
  left: auto;
  white-space: nowrap;
  min-width: calc(100% - 1.5rem - (0.2em));
}

.steps.is-large.is-horizontal.has-content-above .extra-data {
  top: 100%;
  bottom: auto;
}

.steps.is-large.is-horizontal .steps-content {
  margin-left: 1.5rem;
}

.steps.is-large.is-horizontal .steps-content:not(:last-child) {
  margin-right: -1.5rem;
}

.steps.is-large.is-horizontal .steps-content.is-divider-content {
  margin-right: -1.5rem;
  padding-left: 2em;
  padding-right: 2em;
}

.steps.is-large.is-horizontal.has-content-centered .steps-segment:not(:last-child):after {
  left: 50%;
  right: -50%;
}

.steps.is-large.is-horizontal.has-content-centered .steps-marker {
  position: absolute;
  left: calc(50% - 1.5rem);
}

.steps.is-large.is-horizontal.has-content-centered .steps-content {
  margin-top: 3rem;
  margin-left: .5em;
  margin-right: .5em;
  padding-top: .2em;
}

.steps.is-large.is-horizontal.has-content-above.has-content-centered .steps-content {
  margin-bottom: 3rem;
  padding-bottom: .2em;
}

.steps.is-large.is-horizontal:not(.is-thin).has-gaps .steps-segment:not(:last-child):after, .steps.is-large.is-horizontal:not(.is-thin) .steps-segment.has-gaps:not(:last-child):after {
  left: 3.3rem;
  right: 0.3rem;
}

.steps.is-large.is-horizontal:not(.is-thin).has-content-centered.has-gaps .steps-segment:not(:last-child):after, .steps.is-large.is-horizontal:not(.is-thin).has-content-centered .steps-segment.has-gaps:not(:last-child):after {
  left: calc(50% + 1.8rem);
  right: calc(-50% + 1.8rem);
}

.steps-segment:after {
  background-color: #23d160;
}

.steps-segment.is-active:after {
  background-color: #dbdbdb;
}

.steps-segment.is-active ~ .steps-segment:after {
  background-color: #dbdbdb;
}

.steps:not(.is-hollow) .steps-marker:not(.is-hollow) {
  background-color: #23d160;
  color: #fff;
}

.steps:not(.is-hollow) .steps-segment.is-active .steps-marker:not(.is-hollow) {
  background-color: #23d160;
  color: #fff;
}

.steps:not(.is-hollow) .steps-segment.is-active ~ .steps-segment .steps-marker:not(.is-hollow) {
  background-color: #dbdbdb;
  color: rgba(0, 0, 0, 0.7);
}

.steps.is-hollow .steps-marker,
.steps-marker.is-hollow {
  border: 0.3em solid #23d160;
}

.steps.is-hollow .is-active .steps-marker,
.steps .is-active .steps-marker.is-hollow {
  border-color: #23d160;
}

.steps.is-hollow .steps-segment.is-active ~ .steps-segment .steps-marker,
.steps-segment.is-active ~ .steps-segment .steps-marker.is-hollow {
  border-color: #dbdbdb;
}

.steps:not(.is-hollow) .steps-marker:not(.is-hollow).is-white {
  background-color: white !important;
  color: #0a0a0a !important;
}

.steps.is-hollow .steps-marker.is-white,
.steps .steps-marker.is-hollow.is-white {
  border-color: white !important;
}

.steps:not(.is-hollow) .steps-marker:not(.is-hollow).is-black {
  background-color: #0a0a0a !important;
  color: white !important;
}

.steps.is-hollow .steps-marker.is-black,
.steps .steps-marker.is-hollow.is-black {
  border-color: #0a0a0a !important;
}

.steps:not(.is-hollow) .steps-marker:not(.is-hollow).is-light {
  background-color: whitesmoke !important;
  color: #363636 !important;
}

.steps.is-hollow .steps-marker.is-light,
.steps .steps-marker.is-hollow.is-light {
  border-color: whitesmoke !important;
}

.steps:not(.is-hollow) .steps-marker:not(.is-hollow).is-dark {
  background-color: #363636 !important;
  color: whitesmoke !important;
}

.steps.is-hollow .steps-marker.is-dark,
.steps .steps-marker.is-hollow.is-dark {
  border-color: #363636 !important;
}

.steps:not(.is-hollow) .steps-marker:not(.is-hollow).is-primary {
  background-color: #00d1b2 !important;
  color: #fff !important;
}

.steps.is-hollow .steps-marker.is-primary,
.steps .steps-marker.is-hollow.is-primary {
  border-color: #00d1b2 !important;
}

.steps:not(.is-hollow) .steps-marker:not(.is-hollow).is-link {
  background-color: #3273dc !important;
  color: #fff !important;
}

.steps.is-hollow .steps-marker.is-link,
.steps .steps-marker.is-hollow.is-link {
  border-color: #3273dc !important;
}

.steps:not(.is-hollow) .steps-marker:not(.is-hollow).is-info {
  background-color: #209cee !important;
  color: #fff !important;
}

.steps.is-hollow .steps-marker.is-info,
.steps .steps-marker.is-hollow.is-info {
  border-color: #209cee !important;
}

.steps:not(.is-hollow) .steps-marker:not(.is-hollow).is-success {
  background-color: #23d160 !important;
  color: #fff !important;
}

.steps.is-hollow .steps-marker.is-success,
.steps .steps-marker.is-hollow.is-success {
  border-color: #23d160 !important;
}

.steps:not(.is-hollow) .steps-marker:not(.is-hollow).is-warning {
  background-color: #ffdd57 !important;
  color: rgba(0, 0, 0, 0.7) !important;
}

.steps.is-hollow .steps-marker.is-warning,
.steps .steps-marker.is-hollow.is-warning {
  border-color: #ffdd57 !important;
}

.steps:not(.is-hollow) .steps-marker:not(.is-hollow).is-danger {
  background-color: #ff3860 !important;
  color: #fff !important;
}

.steps.is-hollow .steps-marker.is-danger,
.steps .steps-marker.is-hollow.is-danger {
  border-color: #ff3860 !important;
}

@media screen and (max-width: 768px) {
  .steps:not(.is-horizontal).is-dashed .steps-segment:after, .steps:not(.is-horizontal) .steps-segment.is-dashed:after {
    background: repeating-linear-gradient(0deg, #23d160, #23d160 5px, transparent 5px, transparent 10px);
  }
  .steps:not(.is-horizontal).is-dashed .steps-segment.is-active:after,
  .steps:not(.is-horizontal).is-dashed .steps-segment.is-active ~ .steps-segment:after,
  .steps:not(.is-horizontal) .steps-segment.is-active.is-dashed:after,
  .steps:not(.is-horizontal) .steps-segment.is-active ~ .steps-segment.is-dashed:after {
    background: repeating-linear-gradient(0deg, #dbdbdb, #dbdbdb 5px, transparent 5px, transparent 10px);
  }
}

.steps.is-vertical.is-dashed .steps-segment:after, .steps.is-vertical .steps-segment.is-dashed:after {
  background: repeating-linear-gradient(0deg, #23d160, #23d160 5px, transparent 5px, transparent 10px);
}

.steps.is-vertical.is-dashed .steps-segment.is-active:after,
.steps.is-vertical.is-dashed .steps-segment.is-active ~ .steps-segment:after,
.steps.is-vertical .steps-segment.is-active.is-dashed:after,
.steps.is-vertical .steps-segment.is-active ~ .steps-segment.is-dashed:after {
  background: repeating-linear-gradient(0deg, #dbdbdb, #dbdbdb 5px, transparent 5px, transparent 10px);
}

@media screen and (min-width: 769px), print {
  .steps:not(.is-vertical).is-dashed .steps-segment:after,
  .steps:not(.is-vertical) .steps-segment.is-dashed:after {
    background: repeating-linear-gradient(90deg, #23d160, #23d160 10px, transparent 10px, transparent 20px);
  }
  .steps:not(.is-vertical).is-dashed .steps-segment.is-active:after,
  .steps:not(.is-vertical).is-dashed .steps-segment.is-active ~ .steps-segment:after,
  .steps:not(.is-vertical) .steps-segment.is-active.is-dashed:after,
  .steps:not(.is-vertical) .steps-segment.is-active ~ .steps-segment.is-dashed:after {
    background: repeating-linear-gradient(90deg, #dbdbdb, #dbdbdb 10px, transparent 10px, transparent 20px);
  }
}

.steps.is-horizontal.is-dashed .steps-segment:after,
.steps.is-horizontal .steps-segment.is-dashed:after {
  background: repeating-linear-gradient(90deg, #23d160, #23d160 10px, transparent 10px, transparent 20px);
}

.steps.is-horizontal.is-dashed .steps-segment.is-active:after,
.steps.is-horizontal.is-dashed .steps-segment.is-active ~ .steps-segment:after,
.steps.is-horizontal .steps-segment.is-active.is-dashed:after,
.steps.is-horizontal .steps-segment.is-active ~ .steps-segment.is-dashed:after {
  background: repeating-linear-gradient(90deg, #dbdbdb, #dbdbdb 10px, transparent 10px, transparent 20px);
}

.steps.is-thin .steps-marker {
  width: 0.8em;
  height: 0.8em;
}

.steps.is-thin.is-hollow .steps-marker,
.steps.is-thin .steps-marker.is-hollow {
  border-width: 1px;
  height: calc(0.8em + 1px);
  width: calc(0.8em + 1px);
}

@media screen and (max-width: 768px) {
  .steps.is-thin:not(.is-horizontal) .steps-segment:not(:last-child):after {
    bottom: 0;
    left: calc(0.4em - 0.5px);
    top: 0.8em;
    width: 1px;
  }
  .steps.is-thin:not(.is-horizontal) .steps-content {
    margin-top: -1.2em;
    margin-left: 0.8em;
  }
  .steps.is-thin:not(.is-horizontal).has-gaps .steps-segment:not(:last-child):after, .steps.is-thin:not(.is-horizontal) .steps-segment.has-gaps:not(:last-child):after {
    bottom: 0.4em;
    top: 1.2em;
  }
  .steps.is-thin:not(.is-horizontal).has-content-centered .steps-content {
    padding-top: 1.6em;
  }
}

.steps.is-thin.is-vertical .steps-segment:not(:last-child):after {
  bottom: 0;
  left: calc(0.4em - 0.5px);
  top: 0.8em;
  width: 1px;
}

.steps.is-thin.is-vertical .steps-content {
  margin-top: -1.2em;
  margin-left: 0.8em;
}

.steps.is-thin.is-vertical.has-gaps .steps-segment:not(:last-child):after, .steps.is-thin.is-vertical .steps-segment.has-gaps:not(:last-child):after {
  bottom: 0.4em;
  top: 1.2em;
}

.steps.is-thin.is-vertical.has-content-centered .steps-content {
  padding-top: 1.6em;
}

@media screen and (min-width: 769px), print {
  .steps.is-thin:not(.is-vertical) .steps-segment:not(:last-child):after {
    left: 0.8em;
    right: 0;
    top: calc(0.4em - 0.5px);
    height: 1px;
  }
  .steps.is-thin:not(.is-vertical).has-content-above .steps-segment:not(:last-child)::after {
    bottom: calc(0.4em - 0.5px);
    top: auto;
  }
  .steps.is-thin:not(.is-vertical) .steps-content {
    margin-top: 0.8em;
  }
  .steps.is-thin:not(.is-vertical).has-content-centered .steps-segment:not(:last-child):after {
    left: calc(50% + 0.4em);
    right: calc(-50% + 0.4em);
  }
  .steps.is-thin:not(.is-vertical).has-content-centered .steps-marker {
    position: absolute;
    left: calc(50% - 0.4em);
  }
  .steps.is-thin:not(.is-vertical).has-gaps .steps-segment:not(:last-child):after, .steps.is-thin:not(.is-vertical) .steps-segment.has-gaps:not(:last-child):after {
    left: 1.2em;
    right: 0.4em;
  }
  .steps.is-thin:not(.is-vertical).has-content-centered.has-gaps .steps-segment:not(:last-child):after, .steps.is-thin:not(.is-vertical).has-content-centered .steps-segment.has-gaps:not(:last-child):after {
    left: calc(50% + 0.8em);
    right: calc(-50% + 0.8em);
  }
}

.steps.is-thin.is-horizontal .steps-segment:not(:last-child):after {
  left: 0.8em;
  right: 0;
  top: calc(0.4em - 0.5px);
  height: 1px;
}

.steps.is-thin.is-horizontal.has-content-above .steps-segment:not(:last-child)::after {
  bottom: calc(0.4em - 0.5px);
  top: auto;
}

.steps.is-thin.is-horizontal .steps-content {
  margin-top: 0.8em;
}

.steps.is-thin.is-horizontal.has-content-centered .steps-segment:not(:last-child):after {
  left: calc(50% + 0.4em);
  right: calc(-50% + 0.4em);
}

.steps.is-thin.is-horizontal.has-content-centered .steps-marker {
  position: absolute;
  left: calc(50% - 0.4em);
}

.steps.is-thin.is-horizontal.has-gaps .steps-segment:not(:last-child):after, .steps.is-thin.is-horizontal .steps-segment.has-gaps:not(:last-child):after {
  left: 1.2em;
  right: 0.4em;
}

.steps.is-thin.is-horizontal.has-content-centered.has-gaps .steps-segment:not(:last-child):after, .steps.is-thin.is-horizontal.has-content-centered .steps-segment.has-gaps:not(:last-child):after {
  left: calc(50% + 0.8em);
  right: calc(-50% + 0.8em);
}

.steps:not(.is-vertical).has-content-above .steps-segment {
  display: flex;
  flex-direction: column-reverse;
}

.steps:not(.is-vertical).has-content-above .steps-segment .steps-content {
  margin-top: 0;
  padding-top: 0;
  display: flex;
  flex-direction: column-reverse;
}`;