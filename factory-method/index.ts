/*
 * --- ABOUT FACTORY METHOD ---
 *
 * Factory Method is a creational design pattern that provides an interface for creating objects in a superclass,
 * but allows subclasses to alter the type of objects that will be created.
 * thanks to that approach, the code depends on abstractions (interfaces) rather than on concrete classes.
 * as a result we don't have to change the code when we add a new type of some factory, so it's keeping the "open for extension but closed for modification" SOLID principle.
 */

/**
 * --- BRIEF EXPLANATION OF EXAMPLE: ---
 *
 * This is example of Factory Method pattern
 * example is made for notification service
 * that can use different notification types
 * such as email, sms, push notification
 */

/**
 * --- Steps to implement factory method pattern in context of notifications ---
 *
 * 1. create a notification interface
 * 2. create different notification classes that implements notification interface
 * 3. create an abstract notification factory class that will return the instance of notification class
 * 4. create a notification service that will use the notification factory to get the instance of notification class
 * 5. use the notification service to send the notification
 */

interface INotification {
  sendNotification(): void;
}

class EmailNotification implements INotification {
  sendNotification(): void {
    console.log("Email notification sent");
  }
}

class SMSNotification implements INotification {
  sendNotification(): void {
    console.log("SMS notification sent");
  }
}

class PushNotification implements INotification {
  sendNotification(): void {
    console.log("Push notification sent");
  }
}

abstract class NotificationFactory {
  abstract createNotification(): INotification;

  sendNotification(): void {
    const notification = this.createNotification();
    notification.sendNotification();

    // here we can add some common logic for sending notification
    // like logging the notification, saving the notification in database etc.
    console.log("Notification registered");
  }
}

class EmailNotificationFactory extends NotificationFactory {
  createNotification(): INotification {
    return new EmailNotification();
  }
}

class SMSNotificationFactory extends NotificationFactory {
  createNotification(): INotification {
    return new SMSNotification();
  }
}

class PushNotificationFactory extends NotificationFactory {
  createNotification(): INotification {
    return new PushNotification();
  }
}

// Example usage
function someClientCode(factory: NotificationFactory) {
  factory.sendNotification();
}

// usage
someClientCode(new EmailNotificationFactory());
someClientCode(new SMSNotificationFactory());
someClientCode(new PushNotificationFactory());

// output:
// Email notification sent
// Notification registered
// SMS notification sent
// Notification registered
// Push notification sent
// Notification registered

// React example

// Notification component that receives a factory via props and uses it to send a notification
/*
interface NotificationProps {
  factory: NotificationFactory;
}

const NotificationComponent: React.FC<NotificationProps> = ({ factory }) => {
  const handleSendNotification = () => {
    factory.sendNotification();
  };

  return (
    <div>
      <button onClick={handleSendNotification}>Send Notification</button>
    </div>
  );
};

const factoryMap: { [key: string]: NotificationFactory } = {
  email: new EmailNotificationFactory(),
  sms: new SMSNotificationFactory(),
  push: new PushNotificationFactory(),
};

// Container component that decides which notification factory to use
const NotificationContainer: React.FC = () => {
  const [notificationType, setNotificationType] = React.useState<string>('email');

  return (
    <div>
      <select onChange={(e) => setNotificationType(e.target.value)} value={notificationType}>
        <option value="email">Email</option>
        <option value="sms">SMS</option>
        <option value="push">Push</option>
      </select>
      <NotificationComponent factory={factoryMap[notificationType]} />
    </div>
  );
};
*/
