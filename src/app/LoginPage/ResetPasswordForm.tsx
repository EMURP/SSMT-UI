import * as React from 'react';
import { Form, FormGroup, ActionGroup, FormHelperText } from '@patternfly/react-core/src/components/Form'
import { TextInput } from '@patternfly/react-core/src/components/TextInput';
import { Button } from '@patternfly/react-core/src/components/Button';
import { ValidatedOptions } from '@patternfly/react-core/src/helpers/constants';

export interface LoginFormProps extends React.HTMLProps<HTMLFormElement> {
    noAutoFocus?: boolean;
    /** Additional classes added to the Login Main Body's Form */
    
    className?: string;
    showHelperText?: boolean;
    helperText?: React.ReactNode;
    helperTextIcon?: React.ReactNode;
    oldPasswordLabel?: string;
    oldPasswordValue?: string;
    onChangeUsername?: (value: string, event: React.FormEvent<HTMLInputElement>) => void;
    isValidUsername?: boolean;
    newPasswordLabel?: string;
    confirmPasswordLabel?: string;
   
    newPasswordValue?: string;
    confirmPasswordValue?: string;
    /** Function that handles the onChange event for the Password */    
    
    onChangePassword?: (value: string, event: React.FormEvent<HTMLInputElement>) => void;
    isValidPassword?: boolean;
    resetButtonLabel?: string;
    isResetButtonDisabled?: boolean;
    /** Function that is called when the Login button is clicked */
    
    onLoginButtonClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onResetButtonClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    rememberMeLabel?: string;
    isRememberMeChecked?: boolean;
    onChangeRememberMe?: (checked: boolean, event: React.FormEvent<HTMLInputElement>) => void;
}

export const ResetPasswordForm: React.FunctionComponent<LoginFormProps> = ({
    noAutoFocus = false,
    className = '',
    showHelperText = false,
    helperText = null,
    helperTextIcon = null,
    oldPasswordLabel = 'Old Password',
    oldPasswordValue = '',
    onChangeUsername = () => undefined as any,
    isValidUsername = true,
    newPasswordLabel = 'New Password',
    newPasswordValue = '',
    confirmPasswordLabel = 'Confirm New Password',
    confirmPasswordValue = '',
    onChangePassword = () => undefined as any,
    isValidPassword = true,
    resetButtonLabel = 'Reset Password',
    isResetButtonDisabled = false,
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
                label={oldPasswordLabel}
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
                    value={oldPasswordValue}
                    onChange={onChangeUsername}
                />
            </FormGroup>
            <FormGroup
                label={newPasswordLabel}
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
                    value={newPasswordValue}
                    onChange={onChangePassword}
                />
            </FormGroup>
            <FormGroup
                label={confirmPasswordLabel}
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
                    value={confirmPasswordValue}
                    onChange={onChangePassword}
                />
            </FormGroup>
            <ActionGroup>
                <Button variant="primary" type="submit" onClick={onLoginButtonClick} isBlock isDisabled={isResetButtonDisabled}>
                    {resetButtonLabel}
                </Button>
                <a href='javascript:void(0)' onClick={onResetButtonClick} style={{ paddingLeft: "40%" }}>Login</a>
            </ActionGroup>
        </Form>
    );
