import {Notifier, Easing, NotifierComponents} from 'react-native-notifier';
import {default as theme} from '../theme.json';

export function successNotification(msg) {
  Notifier.showNotification({
    title: msg,
    duration: 0,
    showAnimationDuration: 800,
    queueMode: 'reset',
    showEasing: Easing.bounce,
    onHidden: () => console.log('Hidden'),
    hideOnPress: true,
    Component: NotifierComponents.Notification,
    componentProps: {
      titleStyle: {color: theme['color-primary-700']},
    },
    swipeEnabled: true,
    duration: 2000,
  });
}

export const msg = {
  successfulAdd: 'Ürün başarıyla kaydedildi',
  successfulDelete: 'Ürün başarıyla silindi',
  successMagazaChange: 'Magaza bilgileriniz başarıyla değişirilmişir',
  successLogout: 'Başarıyla çıkış yaptınız',
};
