# Attendance Logging Tool for MCC Frontend Developer Course

Each class cohort data resides in it's own module in the `/data` directory.

Initialize a cohort with its own module that contains a startDate and a list of students.

Then as the class proceeds just update the `absent` array for that cohort's data module.

Attendance log entries are calcualted automatically at the specified frequency based on the input startDate and `absent` array

## Usage

Those templates dependencies are maintained via [pnpm](https://pnpm.io) via `pnpm up -Lri`.

This is the reason you see a `pnpm-lock.yaml`. That being said, any package manager will work. This file can be safely be removed once you clone a template.

```bash
$ npm install # or pnpm install or yarn install
```

## Available Scripts

### `pnpm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `pnpm run build`

Builds the app for production to the `docs` folder.
