# React template

## AVAILABLE SCRIPTS

In the project directory, you can run:

- **`npm start`**

  Runs the app in the development mode.<br>
  Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

  The page will reload if you make edits.<br>
  You will also see any lint errors in the console.

- **`npm run lint`**

  Runs ESLint and Prettier, and reports any lines of code that are out of spec.

- **`npm run lint --fix`**

  Will automatically resolve most linting and formatting errors.

- **`npm run build`**

  Builds the app for production to the `build` folder.<br>
  It correctly bundles React in production mode and optimizes the build for the best performance.

  The build is minified and the filenames include the hashes.<br>
  Your app is ready to be deployed!

  See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

- **`npm run eject`**

  **Note: this is a one-way operation. Once you `eject`, you can’t go back!**

  If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

  Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

  You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## STACK

- **Husky**

  Used for managing pre-commit hooks in GitHub, Husky will ensure that linting and testing are run on the developer side prior to any incoming pull request.

  _A NOTE ON USING YARN:_ If you are using Yarn for package management instead of NPM, then Husky may not fully install without further action on your part (Details on the Husky [GitHub Page](https://github.com/typicode/husky/issues/227)). Run the following, if Husky does not appear to be working:

  ```
  npm install husky@next ---dev -W
  node_modules/husky/lib/installer/bin install
  ```

  After running these commands, you should see the following response:

  ```
  husky > setting up git hooks
  husky > done
  ```

  Husky is now ready to use.

## Components naming convention

For component names we use "The Pascal Case" style.  
 Examples: "FormFooter", "Input", "Label", "CheckBox" etc.

If we need to add some specific wrapper for component we just add "Wrapper" word behind a component name.  
 Example: "InputWrapper", "SectionWrapper", etc.

**Button component example**

```javascript
import { SCButton } from './styles';
import { ButtonProps } from './Button.props';

const Button = ({ type, onClick, disabled, children, styles, ...props }) => {
  return (
    <SCButton onClick={onClick} disabled {...props}>
      {children}
    </SCButton>
  );
};

export { Button };
```
