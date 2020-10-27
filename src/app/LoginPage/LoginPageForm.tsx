import * as React from 'react';
import { Form, FormGroup, ActionGroup, FormHelperText } from '@patternfly/react-core/src/components/Form'
import { TextInput } from '@patternfly/react-core/src/components/TextInput';
import { Button } from '@patternfly/react-core/src/components/Button';
import { ValidatedOptions } from '@patternfly/react-core/src/helpers/constants';
import { Checkbox } from '@patternfly/react-core/src/components/Checkbox';

export interface LoginFormProps extends React.HTMLProps<HTMLFormElement> {
    noAutoFocus?: boolean;
    /** Additional classes added to the Login Main Body's Form */
    
    className?: string;
    showHelperText?: boolean;
    helperText?: React.ReactNode;
    helperTextIcon?: React.ReactNode;
    usernameLabel?: string;
    usernameValue?: string;
    /** Function that handles the onChange event for the Username */
    
    onChangeUsername?: (value: string, event: React.FormEvent<HTMLInputElement>) => void;
    isValidUsername?: boolean;
    passwordLabel?: string;
    passwordValue?: string;
    /** Function that handles the onChange event for the Password */
    
    onChangePassword?: (value: string, event: React.FormEvent<HTMLInputElement>) => void;
    isValidPassword?: boolean;
    loginButtonLabel?: string;
    isLoginButtonDisabled?: boolean;
    /** Function that is called when the Login button is clicked */
    
    onLoginButtonClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onResetButtonClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    rememberMeLabel?: string;
    isRememberMeChecked?: boolean;
    /** Function that handles the onChange event for the Remember Me Checkbox */
    
    onChangeRememberMe?: (checked: boolean, event: React.FormEvent<HTMLInputElement>) => void;
}

export const LoginForm: React.FunctionComponent<LoginFormProps> = ({
    noAutoFocus = false,
    className = '',
    showHelperText = false,
    helperText = null,
    helperTextIcon = null,
    usernameLabel = 'Username',
    usernameValue = '',
    onChangeUsername = () => undefined as any,
    isValidUsername = true,
    passwordLabel = 'Password',
    passwordValue = '',
    onChangePassword = () => undefined as any,
    isValidPassword = true,
    loginButtonLabel = 'Log In',
    isLoginButtonDisabled = false,
    onLoginButtonClick = () => undefined as any,
    onResetButtonClick = () => undefined as any,
    rememberMeLabel = '',
    isRememberMeChecked = false,
    onChangeRememberMe = () => undefined as any,
    ...props
}: LoginFormProps) => (
        <Form className={className} {...props}>
            <FormHelperText isError={!isValidUsername || !isValidPassword} isHidden={!showHelperText} icon={helperTextIcon}>
                {helperText}
            </FormHelperText>
            <FormGroup
                label={usernameLabel}
                isRequired
                validated={isValidUsername ? ValidatedOptions.default : ValidatedOptions.error}
                fieldId="pf-login-username-id"
            >
                <TextInput
                    autoFocus={!noAutoFocus}
                    id="pf-login-username-id"
                    isRequired
                    validated={isValidUsername ? ValidatedOptions.default : ValidatedOptions.error}
                    type="text"
                    name="pf-login-username-id"
                    value={usernameValue}
                    onChange={onChangeUsername}
                />
            </FormGroup>
            <FormGroup
                label={passwordLabel}
                isRequired
                validated={isValidPassword ? ValidatedOptions.default : ValidatedOptions.error}
                fieldId="pf-login-password-id"
            >
                <TextInput
                    isRequired
                    type="password"
                    id="pf-login-password-id"
                    name="pf-login-password-id"
                    validated={isValidPassword ? ValidatedOptions.default : ValidatedOptions.error}
                    value={passwordValue}
                    onChange={onChangePassword}
                />
            </FormGroup>
            {rememberMeLabel.length > 0 && (
                <FormGroup fieldId="pf-login-remember-me-id">
                    <Checkbox
                        id="pf-login-remember-me-id"
                        label={rememberMeLabel}
                        isChecked={isRememberMeChecked}
                        onChange={onChangeRememberMe}
                    />
                </FormGroup>
            )}
            <ActionGroup>
                <Button variant="primary" type="submit" onClick={onLoginButtonClick} isBlock isDisabled={isLoginButtonDisabled}>
                    {loginButtonLabel}
                </Button>
                <a href='javascript:void(0)' onClick={onResetButtonClick} style={{ paddingLeft: "35%" }}>Reset Password</a>
            </ActionGroup>
        </Form>
    );
