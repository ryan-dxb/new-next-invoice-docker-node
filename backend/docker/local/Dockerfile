ARG NODE_VERSION=18-alpine3.17

FROM node:${NODE_VERSION}

LABEL name="next-invoice"
LABEL version="1.0.0"
LABEL description="Next Invoice built with Next.js, TypeScript, Tailwind CSS, Express and MongoDB."

RUN apk add --no-cache \
    chromium \
    nss \
    freetype \
    harfbuzz \
    ca-certificates \
    ttf-freefont \
    nodejs \
    yarn

# Tell Puppeteer to skip installing Chrome. We'll be using the installed package.
ENV CHROME_BIN="/usr/bin/chromium-browser" \
    PUPPETEER_SKIP_CHROMIUM_DOWNLOAD="true"
RUN set -x \
    && apk update \
    && apk upgrade \
    && apk add --no-cache \
    udev \
    ttf-freefont \
    chromium \
    && npm install -g puppeteer


ENV NODE_ENV=development

ARG APP_DIR=/app

WORKDIR ${APP_DIR}


# Run the container as a non-root user (uncomment to run as root) // Create User and Group
RUN addgroup --system invoice \
    && adduser --system --ingroup invoice invoice



# Install dependencies
COPY package*.json ./
COPY tsconfig*.json ./


RUN npm install

# Copy the application
COPY --chown=invoice:invoice . ${APP_DIR}

# Build the application // For production
# RUN npm run build

# Change the ownership of the app directory to the invoice user
RUN chown -R invoice:invoice ${APP_DIR}  

#  Switch to the invoice user
USER invoice

EXPOSE 1997

# Run the application 
CMD ["npm", "run", "dev:ts"]