import { useState, useEffect } from 'react';

/**
 * ThemeSwitcher - Floating UI for testing theme presets
 * 
 * Displays a floating button that opens a panel with all available themes.
 * Click a theme to instantly apply it. The current theme persists in localStorage.
 */

const themes = [
    // 🔥 RADICAL 2025 THEMES - 80% Different
    { id: 'brutalist', name: 'Brutalist', emoji: '🔲', description: 'Raw & bold anti-design' },
    { id: 'cyberpunk', name: 'Cyberpunk', emoji: '🌃', description: 'Neon futuristic' },
    { id: 'terminal', name: 'Terminal', emoji: '💻', description: 'Hacker green-on-black' },
    { id: 'vaporwave', name: 'Vaporwave', emoji: '🌅', description: '80s retro sunset' },
    { id: 'photography', name: 'Photography', emoji: '📷', description: 'Cinematic full-bleed' },
    { id: 'organic', name: 'Organic', emoji: '🌿', description: 'Earth tones & nature' },
    // Refined themes
    { id: 'aurora', name: 'Aurora', emoji: '🌈', description: 'Dreamy gradient mesh' },
    { id: 'noir', name: 'Noir', emoji: '🖤', description: 'Elegant dark + gold' },
    { id: 'glass-luxe', name: 'Glass Luxe', emoji: '💎', description: 'Premium glassmorphism' },
    // Classic themes
    { id: '', name: 'Corporate', emoji: '🏢', description: 'Professional & balanced' },
    { id: 'magazine', name: 'Magazine', emoji: '📰', description: 'Editorial full-bleed' },
    { id: 'mobile-first', name: 'Mobile-First', emoji: '📱', description: 'Touch-friendly' },
];

export function ThemeSwitcher() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentTheme, setCurrentTheme] = useState('');

    // Load saved theme on mount
    useEffect(() => {
        const saved = localStorage.getItem('design-system-theme');
        if (saved) {
            setCurrentTheme(saved);
            document.documentElement.setAttribute('data-theme', saved);
        }
    }, []);

    const handleThemeChange = (themeId: string) => {
        setCurrentTheme(themeId);
        if (themeId) {
            document.documentElement.setAttribute('data-theme', themeId);
            localStorage.setItem('design-system-theme', themeId);
        } else {
            document.documentElement.removeAttribute('data-theme');
            localStorage.removeItem('design-system-theme');
        }
        // Give a moment for CSS to apply, then close
        setTimeout(() => setIsOpen(false), 150);
    };

    return (
        <>
            {/* Floating Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-[10000] w-14 h-14 rounded-full bg-primary-600 text-white shadow-2xl hover:bg-primary-500 hover:scale-110 transition-all duration-200 flex items-center justify-center text-2xl"
                aria-label="Theme Switcher"
            >
                🎨
            </button>

            {/* Theme Panel */}
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/30 z-[10001]"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Panel */}
                    <div className="fixed bottom-24 right-6 z-[10002] w-80 bg-surface-elevated rounded-2xl shadow-2xl border border-border overflow-hidden">
                        <div className="p-4 border-b border-border">
                            <h3 className="text-lg font-bold text-text-primary">Design System Themes</h3>
                            <p className="text-sm text-text-secondary">Click to switch theme instantly</p>
                        </div>

                        <div className="p-2 max-h-96 overflow-y-auto">
                            {themes.map((theme) => (
                                <button
                                    key={theme.id || 'default'}
                                    onClick={() => handleThemeChange(theme.id)}
                                    className={`w-full p-3 rounded-xl text-left transition-all duration-150 flex items-center gap-3 ${currentTheme === theme.id
                                        ? 'bg-primary-100 dark:bg-primary-900/30 ring-2 ring-primary-500'
                                        : 'hover:bg-surface-subtle'
                                        }`}
                                >
                                    <span className="text-2xl">{theme.emoji}</span>
                                    <div>
                                        <div className="font-semibold text-text-primary">{theme.name}</div>
                                        <div className="text-xs text-text-secondary">{theme.description}</div>
                                    </div>
                                    {currentTheme === theme.id && (
                                        <span className="ml-auto text-primary-600">✓</span>
                                    )}
                                </button>
                            ))}
                        </div>

                        <div className="p-3 border-t border-border bg-surface-subtle">
                            <p className="text-xs text-text-tertiary text-center">
                                🔥 4 NEW 2025 themes • Try Aurora, Brutalist, Glass Luxe, Noir
                            </p>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
