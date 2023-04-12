import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useSelector, useStore } from 'react-redux';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { memo, useCallback, useEffect } from 'react';
import { useAppDispatch } from 'app/providers/StoreProvider/config/store';
import { TextTheme, Text } from 'widgets/Text/Text';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUserName/loginByUserName';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import cls from './LoginForm.module.scss';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';


export interface LoginFormProps {
    className?: string;
}

const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const store = useStore() as ReduxStoreWithManager;



    useEffect(() => {
        store.reducerManager.add('loginForm', loginReducer);
        dispatch({ type: `@INIT loginForm reducer` });

        return () => {
            store.reducerManager.remove('loginForm');
            dispatch({ type: `@DESTROY loginForm reducer` });
        }
    }, [store]);


    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизации')} />

            {error && <Text text={t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR} />}
            <Input
                autofocus
                type="text"
                className={cls.input}
                placeholder={t('Введите username')}
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Введите пароль')}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                className={cls.loginBtn}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});
export default LoginForm;


