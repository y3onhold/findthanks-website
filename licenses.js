
const LIBRARIES = [
    {
        name: "@babel/runtime",
        version: "v7.28.6",
        desc: "Babel runtime helpers used at runtime for transpiled code.",
        license: "MIT",
        url: "https://github.com/babel/babel"
    },
    {
        name: "@expo/metro-config",
        version: "v54.0.14",
        desc: "Metro bundler configuration for Expo projects.",
        license: "MIT",
        url: "https://github.com/expo/expo"
    },
    {
        name: "@expo/vector-icons",
        version: "v15.1.1",
        desc: "A set of icon fonts for use with Expo and React Native.",
        license: "MIT",
        url: "https://github.com/expo/vector-icons"
    },
    {
        name: "@react-native-async-storage/async-storage",
        version: "v2.2.0",
        desc: "Asynchronous, persistent, key-value storage system for React Native.",
        license: "MIT",
        url: "https://github.com/react-native-async-storage/async-storage"
    },
    {
        name: "@react-native-community/datetimepicker",
        version: "v8.6.0",
        desc: "React Native date and time picker component for iOS and Android.",
        license: "MIT",
        url: "https://github.com/react-native-datetimepicker/datetimepicker"
    },
    {
        name: "@react-native-community/netinfo",
        version: "v11.5.2",
        desc: "Network state information API for React Native.",
        license: "MIT",
        url: "https://github.com/react-native-netinfo/react-native-netinfo"
    },
    {
        name: "@react-navigation/bottom-tabs",
        version: "v7.15.2",
        desc: "Bottom tab navigator for React Navigation.",
        license: "MIT",
        url: "https://github.com/react-navigation/react-navigation"
    },
    {
        name: "@react-navigation/native",
        version: "v7.1.31",
        desc: "Core utilities and hooks for React Navigation.",
        license: "MIT",
        url: "https://github.com/react-navigation/react-navigation"
    },
    {
        name: "@react-navigation/stack",
        version: "v7.8.2",
        desc: "Stack navigator for React Navigation with gesture and animation support.",
        license: "MIT",
        url: "https://github.com/react-navigation/react-navigation"
    },
    {
        name: "@types/react",
        version: "v19.1.17",
        desc: "TypeScript type definitions for React.",
        license: "MIT",
        url: "https://github.com/DefinitelyTyped/DefinitelyTyped"
    },
    {
        name: "expo-apple-authentication",
        version: "v8.0.8",
        desc: "Sign in with Apple support for Expo apps.",
        license: "MIT",
        url: "https://github.com/expo/expo"
    },
    {
        name: "expo-auth-session",
        version: "v7.0.10",
        desc: "OAuth 2.0 and OpenID Connect authentication for Expo.",
        license: "MIT",
        url: "https://github.com/expo/expo"
    },
        {
        name: "expo-checkbox",
        version: "v55.0.3",
        desc: "Checkbox functions for Expo.",
        license: "MIT",
        url: "https://github.com/expo/expo/tree/main/packages/expo-checkbox"
    },
    {
        name: "expo-crypto",
        version: "v15.0.8",
        desc: "Cryptographic functions for Expo, including hashing and random values.",
        license: "MIT",
        url: "https://github.com/expo/expo"
    },
    {
        name: "expo-dev-client",
        version: "v6.0.20",
        desc: "Development client for Expo with custom native code support.",
        license: "MIT",
        url: "https://github.com/expo/expo"
    },
    {
        name: "expo-device",
        version: "v8.0.10",
        desc: "Device information and capabilities API for Expo.",
        license: "MIT",
        url: "https://github.com/expo/expo"
    },
    {
        name: "expo-notifications",
        version: "v0.32.16",
        desc: "Local and push notification support for Expo applications.",
        license: "MIT",
        url: "https://github.com/expo/expo"
    },
    {
        name: "expo-secure-store",
        version: "v15.0.8",
        desc: "Secure key-value storage backed by Keychain (iOS) and Keystore (Android).",
        license: "MIT",
        url: "https://github.com/expo/expo"
    },
    {
        name: "expo-status-bar",
        version: "v3.0.9",
        desc: "Status bar component and utilities for Expo apps.",
        license: "MIT",
        url: "https://github.com/expo/expo"
    },
    {
        name: "expo-web-browser",
        version: "v15.0.10",
        desc: "In-app browser and OAuth redirect support for Expo.",
        license: "MIT",
        url: "https://github.com/expo/expo"
    },
    {
        name: "expo",
        version: "v54.0.33",
        desc: "The Expo SDK — an open-source platform for universal React applications.",
        license: "MIT",
        url: "https://github.com/expo/expo"
    },
    {
        name: "i18n-js",
        version: "v4.5.3",
        desc: "Internationalization and localization library for JavaScript applications.",
        license: "MIT",
        url: "https://github.com/fnando/i18n-js"
    },
    {
        name: "jwt-decode",
        version: "v4.0.0",
        desc: "Decodes JSON Web Tokens without verifying the signature.",
        license: "MIT",
        url: "https://github.com/auth0/jwt-decode"
    },
    {
        name: "react-native-gesture-handler",
        version: "v2.28.0",
        desc: "Declarative gesture handling API for React Native.",
        license: "MIT",
        url: "https://github.com/software-mansion/react-native-gesture-handler"
    },
    {
        name: "react-native-keychain",
        version: "v10.0.0",
        desc: "Secure keychain/keystore access for React Native apps.",
        license: "MIT",
        url: "https://github.com/oblador/react-native-keychain"
    },
    {
        name: "react-native-localize",
        version: "v3.7.0",
        desc: "Device locale and timezone utilities for React Native.",
        license: "MIT",
        url: "https://github.com/zoontek/react-native-localize"
    },
    {
        name: "react-native-paper",
        version: "v5.15.0",
        desc: "Material Design components for React Native following MD3 specification.",
        license: "MIT",
        url: "https://github.com/callstack/react-native-paper"
    },
    {
        name: "react-native-reanimated",
        version: "v4.1.6",
        desc: "React Native animation library using the native thread for smooth 60fps animations.",
        license: "MIT",
        url: "https://github.com/software-mansion/react-native-reanimated"
    },
    {
        name: "react-native-safe-area-context",
        version: "v5.6.2",
        desc: "Safe area insets API for React Native supporting notched and rounded devices.",
        license: "MIT",
        url: "https://github.com/th3rdwave/react-native-safe-area-context"
    },
    {
        name: "react-native-screens",
        version: "v4.16.0",
        desc: "Native navigation screen components for React Navigation.",
        license: "MIT",
        url: "https://github.com/software-mansion/react-native-screens"
    },
    {
        name: "react-native-svg-transformer",
        version: "v1.5.3",
        desc: "Import SVG files in React Native projects via Metro bundler.",
        license: "MIT",
        url: "https://github.com/kristerkari/react-native-svg-transformer"
    },
    {
        name: "react-native-svg",
        version: "v15.15.3",
        desc: "SVG support for React Native applications on iOS and Android.",
        license: "MIT",
        url: "https://github.com/software-mansion/react-native-svg"
    },
    {
        name: "react-native",
        version: "v0.81.5",
        desc: "Framework for building native mobile applications using React and JavaScript.",
        license: "MIT",
        url: "https://github.com/facebook/react-native"
    },
    {
        name: "react",
        version: "v19.1.0",
        desc: "A JavaScript library for building user interfaces.",
        license: "MIT",
        url: "https://github.com/facebook/react"
    },
    {
        name: "sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2",
        version: null,
        desc: "Multilingual sentence embedding model that maps sentences and paragraphs to a 384-dimensional dense vector space, supporting 50+ languages.",
        license: "Apache-2.0",
        url: "https://huggingface.co/sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2"
    },
    {
        name: "typescript",
        version: "v5.9.3",
        desc: "A strongly typed programming language that builds on JavaScript.",
        license: "Apache-2.0",
        url: "https://github.com/microsoft/TypeScript"
    }
];

const EXTERNAL_LINK_SVG = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
        </svg>`;

function getLicenseCounts() {
    const counts = { all: LIBRARIES.length };
    LIBRARIES.forEach(lib => {
        counts[lib.license] = (counts[lib.license] || 0) + 1;
    });
    return counts;
}

function renderSummary() {
    const counts = getLicenseCounts();
    const licenseTypes = Object.keys(counts).filter(k => k !== 'all');
    const summaryEl = document.getElementById('licenseSummary');

    let html = `
                <div class="summary-stat">
                    <span class="summary-num">${counts.all}</span>
                    <span class="summary-label">Libraries</span>
                </div>`;

    licenseTypes.forEach((type, i) => {
        html += `<div class="summary-divider"></div>
                <div class="summary-stat">
                    <span class="summary-num">${counts[type]}</span>
                    <span class="summary-label">${type} Licensed</span>
                </div>`;
    });

    summaryEl.innerHTML = html;
}

function renderFilters() {
    const counts = getLicenseCounts();
    const licenseTypes = Object.keys(counts).filter(k => k !== 'all');
    const filtersEl = document.getElementById('licenseFilters');

    let html = `<button class="filter-btn active" onclick="filterLicenses('all', this)">All <span class="filter-count">${counts.all}</span></button>`;
    licenseTypes.forEach(type => {
        html += `<button class="filter-btn" onclick="filterLicenses('${type}', this)">${type} <span class="filter-count">${counts[type]}</span></button>`;
    });

    filtersEl.innerHTML = html;
}

function renderLibraries(libs) {
    const listEl = document.getElementById('licenseList');
    listEl.innerHTML = libs.map(lib => `
                <div class="license-entry" data-license="${lib.license}">
                    <div class="license-entry-header">
                        <div>
                            <h3 class="lib-name">${lib.name}${lib.version ? `<span class="lib-version">${lib.version}</span>` : ''}</h3>
                            <p class="lib-desc">${lib.desc}</p>
                        </div>
                        <div class="license-meta">
                            <span class="license-badge${lib.license !== 'MIT' ? ' apache' : ''}">${lib.license}</span>
                            <a href="${lib.url}" target="_blank" rel="noopener" class="lib-link"
                                aria-label="View ${lib.name} on GitHub">
                                ${EXTERNAL_LINK_SVG}
                            </a>
                        </div>
                    </div>
                </div>
            `).join('');
}

function filterLicenses(type, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('licenseSearch').value = '';
    const filtered = type === 'all' ? LIBRARIES : LIBRARIES.filter(lib => lib.license === type);
    renderLibraries(filtered);
}

function searchLicenses(q) {
    const query = q.toLowerCase();
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('.filter-btn').classList.add('active');
    const filtered = LIBRARIES.filter(lib =>
        lib.name.toLowerCase().includes(query) ||
        lib.desc.toLowerCase().includes(query) ||
        lib.license.toLowerCase().includes(query)
    );
    renderLibraries(filtered);
}

// Init
renderSummary();
renderFilters();
renderLibraries(LIBRARIES);