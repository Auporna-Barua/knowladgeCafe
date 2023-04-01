import React from "react";

const Blog = () => {
  return (
    <div class="accordion accordion-flush" id="accordionFlushExample">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            Difference between Props vs state.
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">
            In React, props and state are both used to store data that can be
            used by a component. The main difference between them is that props
            are passed down to a component from its parent and are read-only,
            while state is managed internally by the component and can be
            updated using the setState function. Props are used to pass data
            between components, while state is used to manage dynamic behavior
            within a component.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            How does useState work?
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">
            The useState hook in React allows functional components to have
            state by providing a way to declare state variables and update them.
            When a state variable is updated using the setState function
            returned by useState, React re-renders the component with the
            updated state. This allows functional components to have dynamic
            behavior and interact with the user.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
            Purpose of useEffect other than fetching data.
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">
            The useEffect hook in React is not limited to fetching data, it can
            also be used for a wide range of tasks, such as updating the
            document title, adding and removing event listeners, setting up
            timers, and managing component state based on its current state. It
            is a versatile tool for managing side effects in React components,
            and it ensures that these side effects are performed consistently
            and efficiently across different rendering cycles.
          </div>
        </div>
      </div>{" "}
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseFour"
            aria-expanded="false"
            aria-controls="flush-collapseFour"
          >
            How Does React work?
          </button>
        </h2>
        <div
          id="flush-collapseFour"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">
            React is a JavaScript library for building user interfaces. It works
            by allowing developers to create reusable components that are then
            rendered to the DOM. When a component is updated, React compares the
            new and old versions of the component to determine which parts of
            the DOM need to be updated.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
