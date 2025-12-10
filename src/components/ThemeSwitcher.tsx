import { useState, useEffect } from 'react';

/**
 * ThemeSwitcher - Floating UI for testing theme presets
 * 
 * Image Layout Options:
 * - Off: Full-width centered text, no images
 * - Split: 50/50 text and images side by side (contained)
 * - Full-bleed: Single large image that extends edge-to-edge
 * - Background: Full-screen background image with text overlay
 * - Offset: Images break out of container for visual drama
 */

const themes = [
    // 🆕 LIGHTER 2025 THEMES
    { id: 'zen', name: 'Zen', emoji: '🪷', description: 'Ultra-minimal white space' },
    { id: 'pastel', name: 'Pastel', emoji: '🎀', description: 'Soft & playful gradients' },
    { id: 'editorial', name: 'Editorial', emoji: '📖', description: 'Magazine-inspired serif' },
    { id: 'artistic', name: 'Artistic', emoji: '🎭', description: 'Full-bleed no container' },
    // 🔥 RADICAL DARK THEMES
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

type ImageLayout = 'off' | 'split' | 'left' | 'fullbleed' | 'background' | 'offset';

const imageLayouts: { id: ImageLayout; label: string; icon: string; desc: string }[] = [
    { id: 'off', label: 'Off', icon: '❌', desc: 'Text only' },
    { id: 'split', label: 'Right', icon: '➡️', desc: 'Images right' },
    { id: 'left', label: 'Left', icon: '⬅️', desc: 'Images left' },
    { id: 'fullbleed', label: 'Full', icon: '▣', desc: 'Edge to edge' },
    { id: 'background', label: 'BG', icon: '🖼️', desc: 'Behind text' },
    { id: 'offset', label: 'Break', icon: '↗️', desc: 'Breaks out' },
];

export function ThemeSwitcher() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentTheme, setCurrentTheme] = useState('');
    const [imageLayout, setImageLayout] = useState<ImageLayout>('off');

    // Load saved settings on mount
    useEffect(() => {
        const savedTheme = localStorage.getItem('design-system-theme');
        if (savedTheme) {
            setCurrentTheme(savedTheme);
            document.documentElement.setAttribute('data-theme', savedTheme);
        }

        const savedLayout = localStorage.getItem('hero-image-layout') as ImageLayout;
        if (savedLayout && savedLayout !== 'off') {
            setImageLayout(savedLayout);
            document.documentElement.setAttribute('data-hero-layout', savedLayout);
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
        setTimeout(() => setIsOpen(false), 150);
    };

    const handleImageLayoutChange = (layout: ImageLayout) => {
        setImageLayout(layout);

        if (layout === 'off') {
            document.documentElement.removeAttribute('data-hero-layout');
            localStorage.removeItem('hero-image-layout');
        } else {
            document.documentElement.setAttribute('data-hero-layout', layout);
            localStorage.setItem('hero-image-layout', layout);
        }
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
                    <div className="fixed bottom-24 right-6 z-[10002] w-96 bg-surface-elevated rounded-2xl shadow-2xl border border-border overflow-hidden">
                        <div className="p-4 border-b border-border">
                            <h3 className="text-lg font-bold text-text-primary">Design System</h3>
                            <p className="text-sm text-text-secondary">16 themes • 6 hero layouts</p>
                        </div>

                        {/* Image Layout Controls */}
                        <div className="px-4 py-3 border-b border-border bg-surface-subtle">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-sm font-semibold text-text-primary">
                                    🖼️ Hero Image Layout
                                </span>
                            </div>
                            <div className="grid grid-cols-6 gap-1.5">
                                {imageLayouts.map((layout) => (
                                    <button
                                        key={layout.id}
                                        onClick={() => handleImageLayoutChange(layout.id)}
                                        className={`flex flex-col items-center gap-1 p-2 rounded-lg text-xs transition-all ${imageLayout === layout.id
                                            ? 'bg-primary-600 text-white ring-2 ring-primary-400'
                                            : 'bg-surface hover:bg-surface-elevated text-text-secondary'
                                            }`}
                                        title={layout.desc}
                                    >
                                        <span className="text-lg">{layout.icon}</span>
                                        <span className="font-medium">{layout.label}</span>
                                    </button>
                                ))}
                            </div>
                            <p className="text-xs text-text-tertiary mt-2 text-center">
                                {imageLayouts.find(l => l.id === imageLayout)?.desc}
                            </p>
                        </div>

                        <div className="p-2 max-h-64 overflow-y-auto">
                            {themes.map((theme) => (
                                <button
                                    key={theme.id || 'default'}
                                    onClick={() => handleThemeChange(theme.id)}
                                    className={`w-full p-2.5 rounded-xl text-left transition-all duration-150 flex items-center gap-3 ${currentTheme === theme.id
                                        ? 'bg-primary-100 dark:bg-primary-900/30 ring-2 ring-primary-500'
                                        : 'hover:bg-surface-subtle'
                                        }`}
                                >
                                    <span className="text-xl">{theme.emoji}</span>
                                    <div className="flex-1 min-w-0">
                                        <div className="font-semibold text-text-primary text-sm">{theme.name}</div>
                                        <div className="text-xs text-text-secondary truncate">{theme.description}</div>
                                    </div>
                                    {currentTheme === theme.id && (
                                        <span className="text-primary-600 text-sm">✓</span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
