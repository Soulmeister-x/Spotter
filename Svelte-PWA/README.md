# Spotter

Spotter ist eine Progressive Web App (PWA), die entwickelt wurde, um GPS-Koordinaten auch ohne aktive Internetverbindung zu erfassen. Die App speichert die erfassten Geodaten lokal und synchronisiert sie automatisch mit einer vom Nutzer ausgewählten Google Maps-Liste, sobald eine Internetverbindung verfügbar ist. Durch die PWA-Technologie kann die App direkt aus dem Browser auf Desktops und mobilen Geräten installiert werden und bietet eine nahtlose, native App-ähnliche Erfahrung.

## Use Cases

- Offline-Kartierung: Ein Wanderer oder Geocacher möchte GPS-Daten von Standorten in abgelegenen Gebieten ohne Netzabdeckung aufzeichnen.
- Mitarbeiter im Außendienst: Ein Vertriebsmitarbeiter oder Handwerker erfasst die Standorte von Kundenbesuchen, ohne sich Gedanken über die Mobilfunkabdeckung machen zu müssen. Die Daten werden später automatisch synchronisiert.
- Reisende: Ein Reisender möchte die besuchten Orte festhalten, ohne Roaming-Gebühren zu verursachen.

## Funktionen

- GPS-Datenerfassung: Erfasst Standortdaten (Breiten- und Längengrad) mithilfe der Geolocation API, auch im Offline-Modus.
- Persistente Offline-Speicherung: Nutzt die IndexedDB-Datenbank des Browsers, um GPS-Daten dauerhaft auf dem Gerät zu speichern, bis sie synchronisiert werden.
- Google-Authentifizierung: Ermöglicht eine einmalige, persistente Anmeldung mit dem Google-Konto des Nutzers.
- Automatische Synchronisation: Liest Daten aus einer ausgewählten Google Maps-Liste und schreibt offline erfasste Geodaten automatisch dorthin, sobald das Gerät wieder online ist.
- PWA-Fähigkeit: Die App kann installiert und offline genutzt werden und bietet eine schnelle, zuverlässige und engagierte Benutzererfahrung.
- Benutzerverwaltung: Ermöglicht dem Nutzer, sich jederzeit explizit von seinem Google-Konto abzumelden.

----------

# Technical Information

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
pnpm run dev
```

## Building

To create a production version of your app:

```sh
pnpm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

