/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from './element';
let Component, Target;

export default function renderApp(componentFunction = null, targetElement = null) {
  if (componentFunction) Component = componentFunction;
  if (targetElement) Target = targetElement;

  Target.innerHTML = '';
  Target.appendChild(<Component />);

  const rocketRadios = document.querySelectorAll('.rocket-radio');

  rocketRadios.forEach(radio =>
    radio.addEventListener('change', ({ target }) => selectRocket(target.value)),
  );
}