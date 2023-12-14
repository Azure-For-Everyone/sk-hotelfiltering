# Build Intelligent apps: Semantic Kernel in your application

In this repository we'll show you how to leverage [Semantic Kernel](https://github.com/microsoft/semantic-kernel) into an existing application. As an example we'll use how you can benefit from Semantic Kernel in a Hotel booking website. You can use natural language to search through a list of hotels.

This demostration was shown on following events:

- [Austria] Oct/23 - [Microsoft Build 2023](https://pulse.microsoft.com/de-at/transform-de-at/na/fa2-microsoft-build-austria/)
- [Ireland] Oct/23 - [Microsoft Build 2023](https://msevents.microsoft.com/event?id=3755029226)
- [Belgium] Nov/23 - [SaaS local day](https://msevents.microsoft.com/event?id=1131853098)
- [Austria] Dec/23 - [Unlocking AI Opportunities:](https://msevents.microsoft.com/event?id=1236497086)

![Hotel website](./img/hotel-website.png)

## Why Semantic Kernel?

[Semantic Kernel](https://github.com/microsoft/semantic-kernel) allows developers to use AI without any knowledge about AI or LLM. As a web developer or software engineer you can focus on the things you're best: writing code for business applications, and you have the LLM or other models completely abstracted.

## What is in this example?

This example has two parts:

1. an `ui` part which contains the Hotel booking website written in React.
   
   yarn start
    
2. an `api` part which contains the Hotel booking API written in Python and contains some custom logic and the Semantic Kernel SDK.

    python main

## Getting started

Within the `api` we are using a LLM model, either hosted on OpenAI or Azure OpenAI. Before you can run the backend (as mentioned above), make sure you have defined you're OpenAI credentials in the [`.env` file](https://github.com/Azure-For-Everyone/sk-hotelfiltering/blob/main/api/.env) in the `api` folder. Specify the service you which to use by providing `AzureOpenAI` or `OpenAI` to the `GLOBAL__LLM_SERVICE` variable.

    GLOBAL__LLM_SERVICE="AzureOpenAI" # or "OpenAI"

    AZURE_OPEN_AI__DEPLOYMENT_TYPE="chat-completion"
    AZURE_OPEN_AI__CHAT_COMPLETION_DEPLOYMENT_NAME="xxx"
    AZURE_OPEN_AI__TEXT_COMPLETION_DEPLOYMENT_NAME="xxx"
    AZURE_OPEN_AI__ENDPOINT="https://xxx.openai.azure.com"
    AZURE_OPEN_AI__API_KEY="xxx"

    OPEN_AI__MODEL_TYPE="chat-completion"
    OPEN_AI__CHAT_COMPLETION_MODEL_ID="gpt-4"
    OPEN_AI__TEXT_COMPLETION_MODEL_ID="text-davinci-003"
    OPEN_AI__API_KEY="xxx"
    OPEN_AI__ORG_ID="xxx"