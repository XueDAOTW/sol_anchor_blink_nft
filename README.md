# xd-template-sol-action

## Step-by-Step Guide for Setting Up the Action & Blink Project

### 1. Configure Your Project
- Navigate to `anchor.toml`.
- Set your desired cluster and wallet configurations.

### 2. Build and Deploy the Contract
- Run the following commands:
    ```bash
    anchor build
    anchor deploy
    ```
- After deployment, note down the deployed program ID.

### 3. Prepare Action Files
- Copy your `action_example.json` and `action_example.ts` files into the `idl` directory.
    ```bash
    cp target/idl/action_example.json ./app/my-app/app/idls/action_example.json
    cp target/types/action_example.ts ./app/my-app/app/idls/action_example.ts
    ```

### 4. Run the Application
- Navigate to your application directory:
    ```bash
    cd app/my-app
    ```
- Start the development server:
    ```bash
    pnpm dev
    ```

Now, your Action & Blink project should be up and running!
