# Boilerplate for RAD frontend

the application using refinedjs, nextjs, storybook and tailwindcss

## Install dependency

    npm install

## Run app

    npm run dev

and go url: http://localhost:3000/   

## Run story book

    npm run storybook

### Run storybook testing code coverage
    npm run test-storybook -- --coverage

### Generate report
    npx nyc report --reporter=lcov -t coverage/storybook --report-dir coverage/storybook
    
and go url: http://localhost:6006/    

## Quality Control
### Check
    npm run lint

### Fix automatically
    npm run lint -- --fix


# React UI Component Dependencies (Tailwindcss Compatible)
### Notification
- <a href="https://github.com/fkhadra/react-toastify" target="_blank">react-toastify</a>: Toaster with hooks support
### Form Logic
- <a href="https://github.com/react-hook-form/react-hook-form" target="_blank">react-hook-form</a>: React hooks for form validation
### Table Logic
- <a href="https://github.com/TanStack/table" target="_blank">TanStack Table</a>: Headless UI for powerful table & datagrids
### Paginate Logic
- <a href="https://www.npmjs.com/package/react-paginate" target="_blank">react-paginate</a>: React Pagination
