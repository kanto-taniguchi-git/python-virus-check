# python-virus-check

## Environment Setup

### 🐍 Python Environment Setup

This project uses **Python 3.13.2**.
The virtual environment(`venv`) should be created inside the `server` directory, and dependencies should be installed from `requirements.txt`.

``` bash
cd server
python3 -m venv venv
.\venv\Scripts\activate
pip3 install -r requirements.txt
```

## 🔧 Code Formatting(Prettier)

This project uses [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) for code formatting.

### How to Use

#### 1. Install the VSCode extension

Please install the following extensions:

- [Prettier - Code formatter(esbenp.prettier-vscode)](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

#### 2. Enable Formatting on Save

Auto formatting on save is enabled via `.vscode/settings.json`. The following settings are included:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "prettier.requireConfig": true
}
```
