import React, {useEffect, useState} from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ModalCookiePreferences({ isOpen, onClose }: ModalProps) {
    if (!isOpen) return null;

    const [selectedOptions, setSelectedOptions] = useState<any>({
        group1: '',
        group2: '',
        group3: ''
    });

    const [enableButton, setEnableButton] = useState(false);

    const handleOptionChange = (group: string, value: string) => {
        setSelectedOptions(prevState => ({
            ...prevState,
            [group]: value
        }));
    };

    useEffect(() => {
        if (selectedOptions.group1 || selectedOptions.group2 || selectedOptions.group3) {
            setEnableButton(true);
        } else {
            setEnableButton(false);
        }

    },[selectedOptions.group1, selectedOptions.group2, selectedOptions.group3]);


    return (
        <div className="fixed inset-0 bg-gray-950 bg-opacity-70 flex items-center justify-center z-50">
            <div
                className="relative bg-customGrayButton border border-purple-300 p-10 rounded shadow-lg w-[40rem]">
                <div className="flex items-center justify-end -mt-10 -mr-8">
                    <button
                        className="flex text-purple-300 font-serif p-1 text-xl"
                        onClick={onClose}>x
                    </button>
                </div>
                <h2 className="text-lg font-bold mb-2">Manage cookie preferences</h2>
                <div className="overflow-y-auto max-h-[55vh]">
                    <div className="space-y-2">
                        <p>Most GitHub websites use cookies. Cookies are small text files placed on your
                            device
                            to store data so web servers can use it later. GitHub and our third-party partners use
                            cookies
                            to
                            remember your preferences and settings, help you sign in, show you personalized ads, and
                            analyze
                            how
                            well our websites are working. For more info, see the Cookies and similar technologies
                            section
                            of
                            the <a className="text-purple-300 underline"
                                   href="https://docs.github.com/pt/site-policy/privacy-policies/github-general-privacy-statement">Privacy
                                Statement</a>.</p>
                    </div>
                    <div className="mt-7 space-y-2">
                        <h2 className="text-lg font-bold">Required</h2>
                        <p>GitHub uses required cookies to perform essential website functions and to provide the
                            services.
                            For example, cookies are used to log you in, save your language preferences, provide a
                            shopping
                            cart experience, improve performance, route traffic between web servers, detect the size of
                            your
                            screen, determine page load times, improve user experience, and for audience measurement.
                            These
                            cookies are necessary for our websites to work.</p>
                    </div>
                    <div className="mt-7 space-y-2">
                        <h2 className="text-lg font-bold">Analytics</h2>
                        <p>We allow third parties to use analytics cookies to understand how you use our websites so we
                            can
                            make them better. For example, cookies are used to gather information about the pages you
                            visit
                            and how many clicks you need to accomplish a task. We also use some analytics cookies to
                            provide
                            personalized advertising.</p>
                        <div className="flex items-center gap-8">
                            <label className="flex items-center gap-2 cursor-pointer group">
                                <input
                                    className="sr-only"
                                    type="radio"
                                    id="accept-1"
                                    name="radio-button-group-1"
                                    value="Accepted-1"
                                    checked={selectedOptions.group1 === 'Accepted-1'}
                                    onChange={() => handleOptionChange('group1', 'Accepted-1')}
                                />
                                <div
                                    className={`relative w-4 h-4  border-2 rounded-full flex items-center justify-center ${selectedOptions.group1 === 'Accepted-1' ? 'border-purple-300' : 'border-purple-300 bg-transparent'} group-hover:border-white `}
                                >
                                    {selectedOptions.group1 === 'Accepted-1' && (
                                        <div className="absolute w-2 h-2 bg-white rounded-full"></div>
                                    )}
                                    <div
                                        className="relative w-2 h-2 bg-transparent rounded-full group-hover:bg-white group-hover:border-transparent"></div>
                                </div>
                                <span className="text-xs">Accept</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer group">
                                <input
                                    className="sr-only"
                                    type="radio"
                                    id="reject-1"
                                    name="radio-button-group-1"
                                    value="Rejected"
                                    checked={selectedOptions.group1 === 'Rejected-1'}
                                    onChange={() => handleOptionChange('group1', 'Rejected-1')}
                                />
                                <div
                                    className={`relative w-4 h-4  border-2 rounded-full flex items-center justify-center ${selectedOptions.group1 === 'Rejected-1' ? 'border-purple-300' : 'border-purple-300 bg-transparent'} group-hover:border-white `}
                                >
                                    {selectedOptions.group1 === 'Rejected-1' && (
                                        <div
                                            className="absolute w-2 h-2 bg-purple-300 rounded-full group-hover:bg-white group-hover:border-transparent"></div>
                                    )}
                                    <div
                                        className="relative w-2 h-2 bg-transparent rounded-full group-hover:bg-white group-hover:border-transparent"></div>
                                </div>
                                <span className="text-xs">Reject</span>
                            </label>
                        </div>
                    </div>
                    <div className="mt-7 space-y-2">
                        <h2 className="text-lg font-bold">Social Media</h2>
                        <p>GitHub and third parties use social media cookies to show you ads and content based on your
                            social media profiles and activity on GitHub's websites. This ensures that the ads and
                            content you see on our websites and on social media will better reflect your interests. This
                            also enables third parties to develop and improve their products, which they may use on
                            websites that are not owned or operated by GitHub.</p>
                        <div className="flex items-center gap-8">
                            <label className="flex items-center gap-2 cursor-pointer group">
                                <input
                                    className="sr-only"
                                    type="radio"
                                    id="accept-2"
                                    name="radio-button-group-2"
                                    value="Accepted-2"
                                    checked={selectedOptions.group2 === 'Accepted-2'}
                                    onChange={() => handleOptionChange('group2', 'Accepted-2')}
                                />
                                <div
                                    className={`relative w-4 h-4  border-2 rounded-full flex items-center justify-center ${selectedOptions.group2 === 'Accepted-2' ? 'border-purple-300' : 'border-purple-300 bg-transparent'} group-hover:border-white `}
                                >
                                    {selectedOptions.group2 === 'Accepted-2' && (
                                        <div className="absolute w-2 h-2 bg-white rounded-full"></div>
                                    )}
                                    <div
                                        className="relative w-2 h-2 bg-transparent rounded-full group-hover:bg-white group-hover:border-transparent"></div>
                                </div>
                                <span className="text-xs">Accept</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer group">
                                <input
                                    className="sr-only"
                                    type="radio"
                                    id="reject-2"
                                    name="radio-button-group-2"
                                    value="Rejected-2"
                                    checked={selectedOptions.group2 === 'Rejected-2'}
                                    onChange={() => handleOptionChange('group2', 'Rejected-2')}
                                />
                                <div
                                    className={`relative w-4 h-4  border-2 rounded-full flex items-center justify-center ${selectedOptions.group2 === 'Rejected-2' ? 'border-purple-300' : 'border-purple-300 bg-transparent'} group-hover:border-white `}
                                >
                                    {selectedOptions.group2 === 'Rejected-2' && (
                                        <div
                                            className="absolute w-2 h-2 bg-purple-300 rounded-full group-hover:bg-white group-hover:border-transparent"></div>
                                    )}
                                    <div
                                        className="relative w-2 h-2 bg-transparent rounded-full group-hover:bg-white group-hover:border-transparent"></div>
                                </div>
                                <span className="text-xs">Reject</span>
                            </label>
                        </div>
                    </div>
                    <div className="mt-7 space-y-2">
                        <h2 className="text-lg font-bold">Advertising</h2>
                        <p>In addition, GitHub and third parties use advertising cookies to show you new ads based on
                            ads you've already seen. Cookies also track which ads you click or purchases you make after
                            clicking an ad. This is done to show you ads that are more relevant to you and for business
                            purposes with our advertising partners. For example, cookies are used to detect when you
                            click an ad and to show you ads based on your social media interests and website browsing
                            history.</p>
                        <div className="flex items-center gap-8">
                            <label className="flex items-center gap-2 cursor-pointer group">
                                <input
                                    className="sr-only"
                                    type="radio"
                                    id="accept-3"
                                    name="radio-button-group-3"
                                    value="Accepted-3"
                                    checked={selectedOptions.group3 === 'Accepted-3'}
                                    onChange={() => handleOptionChange('group3', 'Accepted-3')}
                                />
                                <div
                                    className={`relative w-4 h-4  border-2 rounded-full flex items-center justify-center ${selectedOptions.group3 === 'Accepted-3' ? 'border-purple-300' : 'border-purple-300 bg-transparent'} group-hover:border-white `}
                                >
                                    {selectedOptions.group3 === 'Accepted-3' && (
                                        <div className="absolute w-2 h-2 bg-white rounded-full"></div>
                                    )}
                                    <div
                                        className="relative w-2 h-2 bg-transparent rounded-full group-hover:bg-white group-hover:border-transparent"></div>
                                </div>
                                <span className="text-xs">Accept</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer group">
                                <input
                                    className="sr-only"
                                    type="radio"
                                    id="reject-3"
                                    name="radio-button-group-3"
                                    value="Rejected-3"
                                    checked={selectedOptions.group3 === 'Rejected-3'}
                                    onChange={() => handleOptionChange('group3', 'Rejected-3')}
                                />
                                <div
                                    className={`relative w-4 h-4  border-2 rounded-full flex items-center justify-center ${selectedOptions.group3 === 'Rejected-3' ? 'border-purple-300' : 'border-purple-300 bg-transparent'} group-hover:border-white `}
                                >
                                    {selectedOptions.group3 === 'Rejected-3' && (
                                        <div
                                            className="absolute w-2 h-2 bg-purple-300 rounded-full group-hover:bg-white group-hover:border-transparent"></div>
                                    )}
                                    <div
                                        className="relative w-2 h-2 bg-transparent rounded-full group-hover:bg-white group-hover:border-transparent"></div>
                                </div>
                                <span className="text-xs">Reject</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-2 pt-8">
                    <button
                        className={`border border-gray-500 bg-gray-400 bg-opacity-15 ${enableButton ? 'hover:bg-gray-800' : 'cursor-not-allowed'} p-2 text-sm font-light w-full`}
                        type="submit"
                        disabled={!enableButton}
                        onClick={() => setSelectedOptions(' ')}>Reset all
                    </button>
                    <button
                        className="border border-gray-500 hover:bg-purple-300 bg-white p-2 text-sm text-zinc-700 font-light w-full"
                        type="submit"
                        onClick={() => handleOptionChange('group1', 'selectedOptions.group1')}>Save changes
                    </button>
                </div>
            </div>
        </div>
    )
}