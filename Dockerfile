FROM navikt/pus-decorator

ENV APPLICATION_NAME=dine-opplysninger
ENV CONTEXT_PATH=/arbeid/dineopplysninger

COPY /decorator.yaml /app
COPY /build /app
