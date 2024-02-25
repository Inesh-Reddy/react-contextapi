## ContextAPI

- Let's you teleport state value to distant children, Helps you get rid of prop drilling.

- How to implement ContextAPI :

        - Define the context.
        - Provide the context througout the component chain.
        - whichever component want to use it... Can use `useContext` hook and get the current value in the count variable.


- What are the downsides of ContextAPI and what are the things it cannot fix ?

     * When ever the `CountContext` changes.. only the components that uses must change re-render. But, in case of ContextAPI it is not happening.

        `So we need a better state management :  Recoil`


- why you use ContextAPI ?

    - `Not` to get rid of r`erenders`.
    - `To get rid of prop drilling` and to make `syntax` looks `cleaner`.
